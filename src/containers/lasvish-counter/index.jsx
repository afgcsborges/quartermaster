/* eslint-disable */

import 'antd/lib/space/style/index.css'
import 'antd/lib/style/index.css'

import React, { useEffect, useState } from 'react'
import Button from 'components/button'
import { Input, Space } from 'antd'
import { isEmpty } from 'lodash'

const fs = window.require('fs')

const chatLogFile = 'C:\\Users\\afgcs\\OneDrive\\Documentos\\YPPChat\\Shankus_emerald_yppchat'

let lavishCounter = []
let currentLavishCounter = []

const sortArray = () => {
    lavishCounter.sort((a, b) => {
        if (a[1] > b[1]) {
            return -1
        }
        if (a[1] < b[1]) {
            return 1
        }
        return 0
    })
}

const sortArrayCurrent = () => {
    currentLavishCounter.sort((a, b) => {
        if (a[1] > b[1]) {
            return -1
        }
        if (a[1] < b[1]) {
            return 1
        }
        return 0
    })
}

const updateCounter = (pirate, setCounter, setCurrentCounter) => {
    const containsPirateIndex = lavishCounter.findIndex(array => array?.includes(pirate))
    if (containsPirateIndex == -1) {
        lavishCounter.push([pirate, 1])
    } else {
        lavishCounter[containsPirateIndex] = [pirate, lavishCounter[containsPirateIndex][1] + 1]
    }
    sortArray()
    setCounter([...lavishCounter])
    const containsPirateIndexCurrent = currentLavishCounter.findIndex(array => array?.includes(pirate))
    if (containsPirateIndexCurrent == -1) {
        currentLavishCounter.push([pirate, 1])
    } else {
        currentLavishCounter[containsPirateIndexCurrent] = [
            pirate,
            currentLavishCounter[containsPirateIndexCurrent][1] + 1
        ]
    }
    sortArrayCurrent()
    setCurrentCounter([...currentLavishCounter])
}

const checkIfItIsStrike = line => {
    return (
        line.includes('performs a powerful') ||
        line.includes('swings a devious') ||
        line.includes('executes a masterful') ||
        line.includes('delivers an overwhelming')
    )
}

function watchChatLogFile(setCounter, setCurrentCounter, chatLogPath, battleWon, battleLost, pirateName, lastPrintedLine = 0) {
    const lockedChatLog = isEmpty(chatLogPath) ? chatLogFile : chatLogPath
    const lockedPirateName = isEmpty(pirateName) ? 'Shankus' : pirateName
    fs.watchFile(lockedChatLog, (curr, prev) => {
        // Remove the file watcher to prevent duplicate logs
        fs.unwatchFile(lockedChatLog)

        // Read the new contents of the file
        fs.readFile(lockedChatLog, 'utf8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }

            // Split the contents into an array of lines
            const lines = data.trim().split('\n')
            let newLastPrintedLine = 0
            if (lastPrintedLine === 0) {
                newLastPrintedLine = lines.length > 6 ? lines.length - 5 : 0
            } else {
                newLastPrintedLine = lastPrintedLine
            }

            // If there are lines that were not printed yet, start printing from the next line
            if (lines.length > newLastPrintedLine) {
                for (let i = newLastPrintedLine; i < lines.length; i++) {
                    if (lines[i].includes('A melee breaks out between the crews')) {
                        currentLavishCounter = []
                        setCurrentCounter([])
                    }
                    if (lines[i].includes('Game over.  Winners:')) {
                        if (lines[i].includes(lockedPirateName)) {
                            battleWon()
                        } else {
                            battleLost()
                        }
                    }
                    if (checkIfItIsStrike(lines[i])) {
                        var entry = lines[i]
                        var pirate = entry.split('] ')[1].split(' ')[0]
                        updateCounter(pirate, setCounter, setCurrentCounter)
                    }
                }
                newLastPrintedLine = lines.length
            }

            // Call the function recursively to watch for changes again
            watchChatLogFile(setCounter, setCurrentCounter, lockedChatLog, battleWon, battleLost, lockedPirateName, newLastPrintedLine)
        })
    })
}

const getData = (counter, type) => {
    return counter.map((_, idx) => {
        return {
            key: `${type}${idx}`,
            pirate: _[0],
            count: _[1]
        }
    })
}

const LavishCounter = ({}) => {
    const [counter, setCounter] = useState([])
    const [currentCounter, setCurrentCounter] = useState([])
    const [tableData, setTableData] = useState([])
    const [currentTableData, setCurrentTableData] = useState([])
    const [loading, setLoading] = useState(false)
    const [pirateName, setPirateName] = useState('')
    const [chatLogPath, setChatLogPath] = useState('')
    const [pirateNameDisable, setPirateNameDisable] = useState(true)
    const [chatLogPathDisable, setChatLogPathDisable] = useState(false)
    const [pirateNameDisableButton, setPirateNameDisableButton] = useState(true)
    const [chatLogPathDisableButton, setChatLogPathDisableButton] = useState(false)
    const [wins, setWins] = useState(0)
    const [losses, setLosses] = useState(0)

    const battleWon = () => {
        setWins(count => count + 1)
    }

    const battleLost = () => {
        setLosses(count => count - 1)
    }

    useEffect(() => {
        setTableData(getData(counter, 'total'))
        setLoading(true)
    }, [counter])

    useEffect(() => {
        setCurrentTableData(getData(currentCounter, 'current'))
    }, [currentCounter])

    useEffect(() => {
        setLoading(false)
    }, [tableData])

    const getTotal = counter => {
        let total = 0
        for (var i = 0; i < counter.length; i++) {
            total = total + counter[i][1]
        }
        return total
    }

    const getCopyCounter = data => {
        var first = data.map(_ => `${_.pirate} ${_.count}`)
        return first.join(' | ')
    }

    return (
        <div style={{ border: '1px solid', display: 'grid', width: '520px' }}>
            <div style={{ border: '1px solid', display: 'grid', width: '518px' }}>{'Lavish Locker Counter'}</div>
            <div style={{ border: '1px solid', display: 'grid', width: '518px' }}>
                <Space.Compact
                    style={{
                        width: '100%',
                        color: 'black'
                    }}
                >
                    <Input
                    style={{width: '90%'}}
                        placeholder="Chat File Path"
                        onChange={evt => setChatLogPath(evt.target.value)}
                        disabled={chatLogPathDisable}
                    />
                    <Button
                        label={'Lock'}
                        onClick={() => {
                            setChatLogPathDisable(true)
                            setChatLogPathDisableButton(true)
                            setPirateNameDisable(false)
                            setPirateNameDisableButton(false)
                        }}
                        disabled={chatLogPathDisableButton}
                    />
                </Space.Compact>
                <Space.Compact
                    style={{
                        width: '100%',
                        color: 'black'
                    }}
                >
                    <Input
                    style={{width: '90%'}}
                        placeholder="Pirate Name"
                        onChange={evt => setPirateName(evt.target.value)}
                        disabled={pirateNameDisable}
                    />
                    <Button
                        label={'Lock'}
                        onClick={() => {
                            setPirateNameDisable(true)
                            setPirateNameDisableButton(true)
                            watchChatLogFile(setCounter, setCurrentCounter, chatLogPath, battleWon, battleLost, pirateName)
                        }}
                        disabled={pirateNameDisableButton}
                    />
                </Space.Compact>
            </div>
            <div style={{ border: '1px solid', display: 'grid', width: '518px' }}>
            {`Battle Score: ${wins}-${losses}`}
            </div>
            <div style={{ border: '1px solid', display: 'flex', width: '518px' }}>
                <div style={{ border: '1px solid', display: 'grid', width: '258px' }}>{`Total (${getTotal(
                    counter
                )})`}</div>
                <div style={{ border: '1px solid', display: 'grid', width: '258px' }}>{`Current Battle (${getTotal(
                    currentCounter
                )})`}</div>
            </div>
            <div style={{ border: '1px solid', display: 'flex', width: '518px' }}>
                <div
                    style={{
                        border: '1px solid',
                        display: 'grid',
                        width: '258px',
                        maxHeight: '250px',
                        overflowY: 'auto'
                    }}
                >
                    <table>
                        <thead>
                            <tr>
                                <th style={{ position: 'sticky', top: 0 }}>Pirate</th>
                                <th style={{ position: 'sticky', top: 0 }}>Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!loading &&
                                tableData.map(_ => {
                                    return (
                                        <tr style={{ height: '32px', verticalAlign: 'baseline' }} key={_.key}>
                                            <td style={{ height: '32px' }}>{_.pirate}</td>
                                            <td style={{ height: '32px' }}>{_.count}</td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </div>
                <div
                    style={{
                        border: '1px solid',
                        display: 'grid',
                        width: '258px',
                        maxHeight: '250px',
                        overflowY: 'auto'
                    }}
                >
                    <table>
                        <thead>
                            <tr>
                                <th style={{ position: 'sticky', top: 0 }}>Pirate</th>
                                <th style={{ position: 'sticky', top: 0 }}>Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!loading &&
                                currentTableData.map(_ => {
                                    return (
                                        <tr style={{ height: '32px', verticalAlign: 'baseline' }} key={_.key}>
                                            <td style={{ height: '32px' }}>{_.pirate}</td>
                                            <td style={{ height: '32px' }}>{_.count}</td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div style={{ border: '1px solid', display: 'flex', width: '518px' }}>
                <div style={{ border: '1px solid', display: 'grid', width: '258px' }}>
                    <div>
                        <Button
                            label={'Copy'}
                            onClick={() => {
                                navigator.clipboard.writeText(getCopyCounter(tableData))
                            }}
                        />
                        <Button
                            label={'Reset'}
                            onClick={() => {
                                setCounter([])
                                setCurrentCounter([])
                                lavishCounter = []
                                currentLavishCounter = []
                            }}
                        />
                    </div>
                </div>
                <div style={{ border: '1px solid', display: 'grid', width: '258px' }}>
                    <div>
                        <Button
                            label={'Copy'}
                            onClick={() => {
                                navigator.clipboard.writeText(getCopyCounter(currentTableData))
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

LavishCounter.defaultProps = {}

LavishCounter.propTypes = {}

export default LavishCounter

/* eslint-disable no-invalid-this */
/* eslint-disable sort-keys */
/* eslint-disable no-magic-numbers */
import 'antd/lib/space/style/index.css'
import 'antd/lib/style/index.css'

import React, { useEffect, useState } from 'react'

import Button from 'components/button'
import PropTypes from 'prop-types'
import { roundTwoDecimals } from 'containers/ship-info'
import { shipDamage } from 'data'

const getHitinSmallCb = ship => {
    switch (shipDamage[ship].gunSize) {
        case 'small':
            return 1
        case 'med':
            return 1.5
        case 'large':
            return 2
        default:
            return 0
    }
}

const getDamageInGunSize = (score, gunSize) => {
    switch (gunSize) {
        case 'small':
            return roundTwoDecimals(score)
        case 'med':
            return roundTwoDecimals(score / 1.5)
        case 'large':
            return roundTwoDecimals(score / 2)

        default:
            return 0
    }
}

// eslint-disable-next-line max-params
const getDamage = (scoreShip1, ship1, scoreShip2, ship2, userGunSize, max = false) =>
    max
        ? `${scoreShip1 >= shipDamage[ship1].max.small ? 'max' : getDamageInGunSize(scoreShip1, userGunSize)} - ${
              scoreShip2 >= shipDamage[ship2].max.small ? 'max' : getDamageInGunSize(scoreShip2, userGunSize)
          }`
        : `${scoreShip1 >= shipDamage[ship1].fray.small ? 'max' : getDamageInGunSize(scoreShip1, userGunSize)} - ${
              scoreShip2 >= shipDamage[ship2].fray.small ? 'max' : getDamageInGunSize(scoreShip2, userGunSize)
          }`

const Counter = ({ ship1, ship2 }) => {
    const [scoreShip1, setScoreShip1] = useState(0)
    const [scoreShip2, setScoreShip2] = useState(0)
    const [userGunSize, setUserGunSize] = useState('small')

    useEffect(() => {
        setUserGunSize(shipDamage[ship1].gunSize)
    }, [ship1])

    const hitShip = (shootingShip, scoreToHit, scoreToSet) => {
        const hit = getHitinSmallCb(shootingShip)
        scoreToSet(scoreToHit + hit)
    }
    const ram = () => {
        const ramDamageToShip1 = shipDamage[ship2].ram.small
        const ramDamageToShip2 = shipDamage[ship1].ram.small
        setScoreShip1(scoreShip1 + ramDamageToShip1)
        setScoreShip2(scoreShip2 + ramDamageToShip2)
    }

    const reset = () => {
        setScoreShip1(0)
        setScoreShip2(0)
    }

    const hitRock = (ship, scoreToHit, scoreToSet) => {
        const rockDamage = shipDamage[ship].rock.small
        scoreToSet(scoreToHit + rockDamage)
    }

    return (
        <div style={{ border: '1px solid', display: 'flex', width: '518px' }}>
            <div style={{ border: '1px solid', display: 'grid', width: '170px' }}>
                <div style={{ display: 'flex', margin: '8px', width: '154px', justifyContent: 'center' }}>
                    <Button label={'Hit'} onClick={() => hitShip(ship2, scoreShip1, setScoreShip1)} />
                    <Button label={'Rock'} onClick={() => hitRock(ship1, scoreShip1, setScoreShip1)} />
                </div>
            </div>
            <div style={{ border: '1px solid', display: 'grid', width: '176px' }}>
                <div>{`SF/Rum`}</div>
                <div
                    onClick={() => {
                        navigator.clipboard.writeText(getDamage(scoreShip1, ship1, scoreShip2, ship2, userGunSize))
                    }}
                >
                    {getDamage(scoreShip1, ship1, scoreShip2, ship2, userGunSize)}
                </div>
                <div>{`Max`}</div>
                <div
                    onClick={() => {
                        navigator.clipboard.writeText(
                            getDamage(scoreShip1, ship1, scoreShip2, ship2, userGunSize, true)
                        )
                    }}
                >
                    {getDamage(scoreShip1, ship1, scoreShip2, ship2, userGunSize, true)}
                </div>
                <div>
                    <Button label={'Ram'} onClick={ram} />
                    <Button label={'Reset'} onClick={reset} />
                </div>
            </div>
            <div style={{ border: '1px solid', display: 'grid', width: '170px' }}>
                <div style={{ display: 'flex', margin: '8px', width: '154px', justifyContent: 'center' }}>
                    <Button label={'Hit'} onClick={() => hitShip(ship1, scoreShip2, setScoreShip2)} />
                    <Button label={'Rock'} onClick={() => hitRock(ship2, scoreShip2, setScoreShip2)} />
                </div>
            </div>
        </div>
    )
}

Counter.defaultProps = {
    ship1: 'sloop',
    ship2: 'sloop'
}

Counter.propTypes = {
    ship1: PropTypes.string,
    ship2: PropTypes.string
}

export default Counter

/* eslint-disable */

import 'antd/lib/space/style/index.css'
import 'antd/lib/style/index.css'

import React, { useEffect, useState } from 'react'
import { shipDamage, shipSelect } from 'data'

import Button from 'components/button'
import Counter from 'containers/counter'
import PropTypes from 'prop-types'
import Select from 'components/select'
import ShipInfo from 'containers/ship-info'
import { isEmpty } from 'lodash'
import { shipImages } from 'images'

const BattleCard = ({}) => {
    const [ship1, setShip1] = useState('sloop')
    const [ship1Image, setShip1Image] = useState(shipImages.sloop)
    const [ship2, setShip2] = useState('sloop')
    const [ship2Image, setShip2Image] = useState(shipImages.sloop)

    useEffect(() => {
        setShip1Image(shipImages[ship1])
    }, [ship1])
    useEffect(() => {
        setShip2Image(shipImages[ship2])
    }, [ship2])

    return (
        <div style={{ border: '1px solid', display: 'grid', width: '520px' }}>
            <div style={{ border: '1px solid', display: 'flex', width: '518px' }}>
                <div style={{ border: '1px solid', display: 'grid', width: '258px' }}>{'User'}</div>
                <div style={{ border: '1px solid', display: 'grid', width: '258px' }}>{'Enemy'}</div>
            </div>
            <div style={{ border: '1px solid', display: 'flex', width: '518px' }}>
                <div style={{ border: '1px solid', display: 'grid', width: '258px' }}>
                    <div
                        style={{
                            border: '1px solid',
                            display: 'flex',
                            width: '258px',
                            justifyContent: 'center',
                            backgroundColor: 'lightgrey'
                        }}
                    >
                        <img
                            src={ship1Image}
                            style={{ verticalAlign: 'middle', margin: '8px', height: '24px', width: '30px' }}
                        />
                        <Select options={shipSelect} value={ship1} onChange={setShip1} />
                    </div>
                    <ShipInfo ship={ship1} />
                </div>
                <div style={{ border: '1px solid', display: 'grid', width: '258px' }}>
                    <div
                        style={{
                            border: '1px solid',
                            display: 'flex',
                            width: '258px',
                            justifyContent: 'center',
                            backgroundColor: 'lightgrey'
                        }}
                    >
                        <img
                            src={ship2Image}
                            style={{ verticalAlign: 'middle', margin: '8px', height: '24px', width: '30px' }}
                        />
                        <Select options={shipSelect} value={ship2} onChange={setShip2} />
                    </div>
                    <ShipInfo ship={ship2} />
                </div>
            </div>
            <Counter ship1={ship1} ship2={ship2} />
        </div>
    )
}

BattleCard.defaultProps = {}

BattleCard.propTypes = {}

export default BattleCard

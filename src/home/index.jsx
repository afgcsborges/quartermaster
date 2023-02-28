/* eslint-disable */
import React, { useEffect, useState } from 'react'

import BattleCard from 'containers/battle-card'
import { shipDamage } from 'data'

const Home = () => {
    const [damageData] = useState(shipDamage)

    return (
        <div className="App">
            <div style={{ display: 'inline-flex', width: '520px' }}>
                <BattleCard
                />
            </div>
        </div>
    )
}

Home.propTypes = {}

export default Home

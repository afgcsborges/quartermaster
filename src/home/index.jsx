/* eslint-disable */
import React, { useEffect, useState } from 'react'

import BattleCard from 'containers/battle-card'
import { shipDamage } from 'data'

const Home = () => {
    const [damageData] = useState(shipDamage)

    return (
        <div className="App">
            <BattleCard />
        </div>
    )
}

Home.propTypes = {}

export default Home

/* eslint-disable */
import React from 'react'

import BattleCard from 'containers/battle-card'
import LavishCounter from 'containers/lasvish-counter'

const Home = () => {
    return (
        <div className="App">
            <BattleCard />
            <LavishCounter />
        </div>
    )
}

Home.propTypes = {}

export default Home

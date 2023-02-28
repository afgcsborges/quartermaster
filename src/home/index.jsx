import React, { useEffect, useState } from 'react'

import InfoCard from 'containers/info-card'
import { shipDamage } from 'data'

const Home = () => {
    const [damageData] = useState(shipDamage)

    return (
        <div className="App">
            <div style={{ display: 'inline-flex', width: '1100px' }}>
                <InfoCard
                />
                <InfoCard
                />
            </div>
            <div style={{ display: 'inline-flex', width: '1100px' }}>
                <InfoCard
                />
                <InfoCard
                />
            </div>
            <div style={{ display: 'inline-flex', width: '1100px' }}>
                <div style={{ border: '1px solid', display: 'grid', width: '520px' }}>
                </div>
                <div style={{ border: '1px solid', display: 'grid', width: '520px' }}>
                </div>
            </div>
        </div>
    )
}

Home.propTypes = {}

export default Home

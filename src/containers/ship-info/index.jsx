/* eslint-disable */

import 'antd/lib/space/style/index.css'
import 'antd/lib/style/index.css'

import React, { useEffect, useState } from 'react'
import { shipDamage, shipSelect } from 'data'

import Button from 'components/button'
import PropTypes from 'prop-types'
import Select from 'components/select'
import { isEmpty } from 'lodash'

const roundTwoDecimals = (num) => {
    return Math.round(num * 100) / 100
}

const ShipInfo = ({ ship }) => {

    return (
        <div style={{ border: '1px solid', display: 'grid', width: '250' }}>
            <div style={{ display: 'grid', width: '250px', justifyContent: 'center' }}>
                {`SF/Rumb dmg: ${roundTwoDecimals(shipDamage[ship].fray.small)}/${roundTwoDecimals(shipDamage[ship].fray.med)}/${roundTwoDecimals(shipDamage[ship].fray.large)}`}
            </div>
            <div style={{ display: 'grid', width: '250px', justifyContent: 'center' }}>
                {`Max dmg: ${roundTwoDecimals(shipDamage[ship].max.small)}/${roundTwoDecimals(shipDamage[ship].max.med)}/${roundTwoDecimals(shipDamage[ship].max.large)}`}
            </div>
            <div style={{ display: 'grid', width: '250px', justifyContent: 'center' }}>
                {`Shoots: ${shipDamage[ship].gunSize} cbs`}
            </div>
        </div>
    )
}

ShipInfo.defaultProps = {
    ship: 'sloop'
}

ShipInfo.propTypes = {
    ship: PropTypes.string
}

export default ShipInfo

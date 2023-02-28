/* eslint-disable no-magic-numbers */

import 'antd/lib/space/style/index.css'
import 'antd/lib/style/index.css'

import React, { useEffect, useState } from 'react'

import Button from 'components/button'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'

const InfoCard = ({  }) => {

    return (
        <div style={{ border: '1px solid', display: 'grid', width: '520px' }}>
            <div>{`| Token: | /30`}</div>
            <div>
                {`Tasks 01-10: `}
                <Button label={`Do Tasks 01-10`} onClick={() => console.log('batata')} />
            </div>
            <div>
                {`Tasks 11-20: `}
                <Button label={`Do Tasks 11-20`} onClick={() => console.log('batata')} />
            </div>
            <div>
                {`Tasks 21-30: `}
                <Button label={`Do Tasks 21-30`} onClick={() => console.log('batata')} />
            </div>
            <div>{`Balance:  USDT`}<Button label={`Loop`} onClick={() =>  console.log('batata')} /></div>
        </div>
    )
}

InfoCard.defaultProps = {
}

InfoCard.propTypes = {
}

export default InfoCard

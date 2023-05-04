import 'antd/lib/button/style/index.css'
import 'antd/lib/style/index.css'

import AntdButton from 'antd/lib/button'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled(AntdButton)`
    &&& {
        height: 40px;
        font-size: 14px;
        width: 50px;
        padding: 8px;
        margin-right: 5px;
        margin-left: 5px;
        background-color: 'transparent';
        border-color: '#508BC3';
        color: '#508BC3';

        &:hover {
            background-color: '##6083A5';
            color: '#4C4C4C';

            > span.anticon {
                color: '#4C4C4C';
            }
        }

        &:active {
            background-color: '#1890FF';
            color: '#1890FF';
            > span.anticon {
                color: '#1890FF';
            }
        }
    }
`

const Button = ({ label, onClick, disabled }) => (
    <StyledButton disabled={disabled} onClick={onClick}>
        {label}
    </StyledButton>
)

Button.defaultProps = {
    disabled: false,
    label: null,
    onClick: null
}

Button.propTypes = {
    disabled: PropTypes.bool,
    /** Text inside button */
    label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /** Set the handler to handle click event */
    onClick: PropTypes.func
}

export default Button

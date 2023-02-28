import PropTypes from 'prop-types'
import React from 'react'
import fontFamily from './font'
import styled from 'styled-components'

const LEVEL1 = {
    line: 16,
    size: 14,
    value: 1
}

const LEVEL2 = {
    line: 14,
    size: 12,
    value: 2
}

const LEVEL3 = {
    line: 11,
    size: 10,
    value: 3
}

const getFontSizeByLevel = level => {
    switch (level) {
        case LEVEL1.value:
            return LEVEL1.size
        case LEVEL2.value:
            return LEVEL2.size
        case LEVEL3.value:
            return LEVEL3.size
        default:
            return LEVEL1.size
    }
}

const getLineHeightByLevel = level => {
    switch (level) {
        case LEVEL2.value:
            return LEVEL2.line
        case LEVEL3.value:
            return LEVEL3.line
        default:
            return LEVEL1.line
    }
}

const StyledText = styled.span`
    font-family: ${fontFamily};
    font-style: normal;
    color: #4c4c4c;
    font-size: ${({ level }) => getFontSizeByLevel(level)}px;
    line-height: ${({ level }) => getLineHeightByLevel(level)}px;
    font-weight: ${({ strong }) => (strong ? '700' : '500')};
    max-width: 100%;
    display: inline-block;

    ${({ minWidth }) => (minWidth ? `min-width: ${minWidth};` : null)}
`

const Text = ({ className, label, level, strong, underline, minWidth }) => (
    <StyledText
        className={className}
        minWidth={minWidth}
        level={level}
        strong={strong}
        title={label}
        underline={underline}
    >
        {underline ? <u>{label}</u> : label}
    </StyledText>
)

Text.defaultProps = {
    level: 1,
    strong: false,
    underline: false
}

/* eslint-disable no-magic-numbers */
Text.propTypes = {
    /** Class name attribute */
    className: PropTypes.string,
    /** Content */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Set content importance */
    level: PropTypes.oneOf([1, 2, 3]),
    /** Min div width */
    minWidth: PropTypes.string,
    /** Bold style */
    strong: PropTypes.bool,
    /** Underlined style */
    underline: PropTypes.bool
}

export default Text

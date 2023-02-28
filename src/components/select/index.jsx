import 'antd/lib/style/index.css'
import 'antd/lib/select/style/index.css'

import styled, { createGlobalStyle } from 'styled-components'

import AntdSelect from 'antd/lib/select'
import PropTypes from 'prop-types'
import React from 'react'

const StyledSelect = styled(AntdSelect)`
    width: 80%;
    height: ${props => (props.size === 'large' ? '40px' : '32px')};
    &&&.ant-select {
        min-width: 50px;
        outline: none;
        border: none;
        &&& .ant-select-clear {
            span {
                background: #ffffff;
            }
            svg {
                color: #4c4c4c;
            }
        }
    }
    &&&.ant-select * {
        outline: none;
    }
    &&&.ant-select .ant-select-arrow {
        color: #4c4c4c !important;
    }
    &&&.ant-select-focused .ant-select-selector {
        box-shadow: 0 0 0 0.5px #91d5ff;
    }
    &&&.ant-select-disabled .ant-select-selector {
        background-color: #f4f4f4;
        border: none;
        border-bottom: none;
        box-shadow: 0 0 0 0.5px #8b8b8b;
    }
    &&&.ant-select:not(.ant-select-disabled) .ant-select-selector {
        background: '#FFFFFF';
        border: none;
        border-bottom: none;
        box-shadow: 0 0 0 0.5px #8b8b8b;
    }
    &&&.ant-select:not(.ant-select-disabled):hover .ant-select-selector,
    &&&.ant-select:not(.ant-select-disabled).ant-select-focused .ant-select-selector {
        box-shadow: 0 0 0 0.5px #91d5ff;
        border-color: transparent;
    }
    &&&.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
        background-color: #f69127;
    }
    &&&.ant-select .ant-select-selector .ant-select-selection-search {
        margin-right: 24px;
    }
    &&&.ant-select .ant-select-selection-search-input {
        padding: 0;
        color: ${props => (props.disabled ? '#8B8B8B' : '#2E2E2E')};
    }
    &&&.ant-select .ant-select-selector .ant-select-selection-placeholder {
        color: #adadad;
        font-style: italic;
        font-size: ${props => (props.size === 'large' ? '12px' : '10px')};
    }
    &&&.ant-select .ant-select-selector .ant-select-selection-item {
        color: #2e2e2e;
        font-size: ${props => (props.size === 'large' ? '12px' : '10px')};
    }
    &&& .rc-virtual-list-holder-inner > .ant-select-item-option-content {
        color: #2e2e2e;
    }
`
export const SelectDropDownStyle = `
&&& .ant-select-dropdown {
    background-color: #E2E2E2 !important;
}
&&& .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: #F4F4F4 !important;
}
&&& .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
    background-color: #F4F4F4 !important;
}
&&& .ant-select-item-option:not(.ant-select-item-option-disabled) {
    color: #4C4C4C !important;
}
&&& .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    font-weight: 500 !important;
    color: #000000 !important;
    background-color: #BFBFBF !important;
}
`

const StyledDropdown = createGlobalStyle`
    ${SelectDropDownStyle}
`

const Select = ({ allowClear, options, size, placeholder, disabled, value, onChange, showSearch }) => (
    <React.Fragment>
        <StyledDropdown />
        <StyledSelect
            size={size}
            placeholder={placeholder}
            allowClear={allowClear}
            disabled={disabled}
            value={value}
            onChange={onChange}
            showArrow={true}
            showSearch={showSearch}
            optionFilterProp={'label'}
            filterOption={showSearch}
        >
            {options.map(({ label, key }) => (
                <StyledSelect.Option key={key} label={label}>
                    {label}
                </StyledSelect.Option>
            ))}
        </StyledSelect>
    </React.Fragment>
)

Select.defaultProps = {
    allowClear: true,
    disabled: false,
    options: [],
    placeholder: '',
    showSearch: false,
    size: 'large'
}

Select.propTypes = {
    /** Show clear button */
    allowClear: PropTypes.bool,
    /** Whether disabled select */
    disabled: PropTypes.bool,
    /** Called when select an option or input value change */
    onChange: PropTypes.func,
    /** {Label: PropTypes.string, Key: String} */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string,
            label: PropTypes.string
        })
    ),
    /** Placeholder of select */
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Whether show search input in single mode */
    showSearch: PropTypes.bool,
    /** Size of Select input */
    size: PropTypes.oneOf(['large', 'middle']),
    /** Current selected option */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Select

import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import PropTypes from 'prop-types';



const CheckBox = (props) => {
    const inputRef = React.useRef(null);

    const onChange = () => {
        if (props.onChange) {
            props.onChange(inputRef.current)
        }
    }
    return (
        <div>
            <label className='custom__checkbox'>
                <input type='checkbox' ref={inputRef} onChange={onChange} checked={props.checked} />&emsp;
                {/* <span className='custom-checkbox__checkMark'> */}
                    {/* <i className='bx bx-check'></i> */}
                    {/* <CheckIcon /> */}
                {/* </span> */}
                {props.label}
            </label>

        </div>
    )
}
CheckBox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange:PropTypes.func.isRequired

}
export default CheckBox;
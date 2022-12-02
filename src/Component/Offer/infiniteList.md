import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types';

const InfiniteList = (props) => {
    const listRef = useRef(null);
    const [data, setData]=useState(props.data)
    console.log("DATA", data)
    return (
        <div ref={listRef}>

        </div>
    )
}
InfiniteList.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,

}

export default InfiniteList;

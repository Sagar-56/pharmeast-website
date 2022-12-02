import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const InfiniteList = (props) => {

    // const perLoad = 6;
    const listRef = useRef(null);
    const [data, setData] = useState(props.data)

    // console.log("DATA", data)

    useEffect(() => {
        setData(props.data)
        // setIndex(1);
    }, [props.data])

    const renderData = ({ data, sortData, sortsData }) => {
        if (data) {
            if (data.length > 0) {
                return data.sort(sortsData[sortData].method).map((item, index) => {
                    return (
                        <div className="card box" style={{ width: '18rem' }} key={index}>
                            <img src={item.Product_image} className="card-img-top" alt={item.Product_Name} />
                            <div className="card-body boxhead2">
                                <h5 className="card-title">{item.Product_Name}</h5>
                                <p className="card-text disc2">{item.Discount}</p>
                                <p className="card-text mewP2"><del style={{ color: "#ff0000" }}>₹{item.Old_Price}</del></p>
                                <p className="card-text mewP2">₹{item.New_Price}</p>
                                <a href="#id" className="btn btn-primary btn___morph" style={{ marginTop: "5px" }}>Go somewhere</a>
                            </div>
                        </div>
                    )
                })
            } else {
                return (
                    <div>
                        <h3>No Data Available...</h3>
                    </div>
                )
            }
        } else {
            return (
                <div style={{ width: '90px', height: '90px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="https://i.ibb.co/yP1frVK/cupertino-activity-indicator.gif"  alt='Loading...' />
                    <h4>Wait a While...</h4>
                </div>
            )
        }
    }

    return (
        <>
            <div id='showContent' ref={listRef}>
                {renderData(props)}
            </div>
        </>
    )
}
InfiniteList.propTypes = {
    data: PropTypes.array.isRequired,

}
export default InfiniteList;


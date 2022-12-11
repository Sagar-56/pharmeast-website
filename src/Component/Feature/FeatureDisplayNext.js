import React, { Fragment } from "react";
// import { Link } from "react-router-dom";


const FeatureDisplayNext = (props) => {

    const FeatureData = ({ FeatData }) => {
        if (FeatData) {
            return FeatData.map((item) => {
                return (
                    <div className="boxes">
                        <img src={item.feature_image} alt={item.product_name} />
                        <div className="boxhead">
                            <h4>{item.product_name}</h4>
                        </div>
                        <div className="disDiv">
                            <div className="mrpDiv">
                                <span className="mrp"></span>MRP<span className="h5span"><del>{item.feature_oldPrice}</del></span>
                            </div>
                            <div className="disc">
                                <h4>{item.feature_discount}</h4>
                            </div>
                            <div className="mewP">
                                <h6>{item.feature_newPrice}</h6>
                            </div>
                        </div>
                    </div>

                )
            })

        }
    }
    return (
        <Fragment>
            <div className="featureDom">
                {FeatureData(props)}
            </div>
        </Fragment>
    )
}

export default FeatureDisplayNext;
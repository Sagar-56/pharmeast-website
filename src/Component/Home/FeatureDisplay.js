import React, { Fragment } from "react";
import { Link } from "react-router-dom";


const FeatureDisplay = (props) => {
    const FeatureList = ({ FeatureData }) => {
        if (FeatureData) {
            return FeatureData.map((item, index) => {
                return (

                    <div className="featureimgcont featureimgcont2" key={index}>
                        <Link to={`/Feature/${item.state_id}`} target={"_parent"} key={item.state_id}>
                            <div className="featureimg">
                                <img src={item.feature_image} alt={item.feature_image} />
                            </div>
                        </Link>
                    </div>

                )
            })

        }
    }
    return (
        <Fragment>
            <div className="featureMainDiv" id="feature___div">
                {FeatureList(props)}
            </div>
        </Fragment>
    )
}

export default FeatureDisplay;
// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";
import './Deals.css';


const DealsProducts = (props) => {
    const renderList = ({ DealData }) => {
        if (DealData.length) {
            return DealData.map((item, index) => {
                return (
                    <div className="backcolimg backcolimg1" key={index}>
                        <div className="backcolimgdiscout backcolimgdiscout12">
                            <div className="backcolimgoffcont backcolimgdiscout1">
                                <h3>{item.deals_discount}</h3>
                            </div>
                            <img src={item.deals_image} alt={item.deals_heading} />
                        </div>
                        <div className="backcolimgbtncout">
                            <Link to={`/deals/${item.state_id}`} target={"_blank"} key={index} className="link" style={{ textDecoration: 'none' }} >
                                <p>{item.deals_heading}</p>
                            </Link>
                            <div className="backcolbtncout1">
                                <h4>MRP<del>{item.deals_oldPrice}</del></h4>
                            </div>
                            <div className="backcolbtncout2">{item.deals_newPrice}</div>
                        </div>
                    </div>
                )
            })
        }
    }

    return (
        <>
            <div className="backcolimgcont" id="deals___slide">
                {renderList(props)}
            </div>
        </>
    )
}

export default DealsProducts;
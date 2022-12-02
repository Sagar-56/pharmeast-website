import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";


const OfferDisplay = (props) => {
    // console.warn("slide", props)

    const CahList = ({ cashbackData}) => {
        if (cashbackData) {
            return cashbackData.map((item, index) => {
                return (
                    <div className={"offb offb2 offTrans"} key={index}>
                        <div className="offbimg">
                            <img src={item.cashback_thumb} alt={item.cashback_thumb} />
                        </div>
                        <div className="offbcont">
                            <Link className="link" target={"_blank"} to={`/offer2/${item.state_id}`} key={item.state_id} style={{ textDecoration: 'none' }}>
                                <div className="offcontflat">
                                    <h3>{item.cashback_head}</h3>
                                </div>
                            </Link>
                            <div className="codediv">
                                <span className="code">code: </span>
                                <span className="code45 code2">{item.cashback_coupon}</span>
                            </div>
                        </div>
                    </div>

                )
            })

        }
    }
    return (
        <Fragment>
            <div className="offerboxdiv" id={'off-Slide'}>
                {CahList(props)}
            </div>
        </Fragment>
    )
}

export default OfferDisplay;
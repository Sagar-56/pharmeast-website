// @ts-nocheck
import React, { useEffect, useState } from "react";
import DoneAllIcon from '@mui/icons-material/DoneAll';


const DealDisplay = (props) => {
    // console.warn("myproduct", props.products)

const [isCartSuccess, setIsCartSuccess] = useState(false)


// const addCart = (e) => {
    // console.log("cashback", e)
// 
// }
// useEffect((e) => {
//     if (isCartSuccess !== e) {
//         const id = setTimeout(() => {
//             console.log("Running Interval");
//             setIsCartSuccess(e);
//         }, 2000);

//         return () => {
//             console.log("Clearing Interval");
//             clearTimeout(id);
//         }
//     }
// }, [isCartSuccess])

    const renderData = ({ DealsData }) => {
        if (DealsData) {
            if (DealsData.length > 0) {
                return DealsData.map((item, index) => {
                    return (
                        <div className="Dealshead" key={index}>
                            <div className='img_deals'>
                                <img src={item.Deals_image} alt={item.Deals_tag}
                                    className="img-thumbnail" />
                            </div>
                            <div className="img_content">
                                <div className="deals2_head">
                                    <h4>{item.Deals_tag}</h4>
                                </div>
                                <div className="deals_subDiv">
                                    <h3 className="mrp5">MRP <del>₹ {item.Deals_OldMrp}</del></h3>
                                </div>
                                <div className="deals_copy">
                                    <h6 className="h6">₹ {item.Deals_NewMrp}</h6>
                                </div>
                                <div className="deals_discCoupon">
                                    <span className='h3'>{item.Deals_discount}</span>
                                </div>
                                <div className="byn">
                                    <button type="submit" className="btn btn-success"
                                        onClick={(e) =>
                                            props.products.addToCardHandler({
                                                id: item._id,
                                                qty: item.qty,
                                                image: item.Deals_image,
                                                price: item.Deals_NewMrp,
                                                name: item.Deals_tag,
                                                disc: item.Deals_discount
                                            })
                                        }

                                    >Add to Card</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            } else {
                return (
                    <div>
                        <h3>No Filter is Applied</h3>
                    </div>
                )
            }
        } else {
            return (
                <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <img src="https://i.ibb.co/yP1frVK/cupertino-activity-indicator.gif" style={{
                        width:
                            '90px', height: '90px', display: 'flex', justifyContent: 'center', alignItems:
                            'center'
                    }} alt='Loading...' />
                    <h4>Wait a While...</h4>
                </div>
            )
        }
    }

    return (
        <>
            <div className="dealsDetails">
                {/* <div className="success___msg">
                    {
                        !isCartSuccess ? "" : (<div className='success' style={{ color: '#000' }}><DoneAllIcon />&emsp;coupon copied</div>)
                    }
                </div> */}
                {renderData(props)}
            </div>
        </>
    )
}

export default DealDisplay;
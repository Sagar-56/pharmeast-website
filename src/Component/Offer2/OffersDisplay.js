import React, { useRef, useState, useEffect } from 'react';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const OffersDisplay = (props) => {
    /////////////////////////
    // console.log("cashback", props)
    const [isCopySuccess, setIsCopySuccess] = useState(false);
    const textAreaCopy = useRef(null)

    const textCopy = (e) => {
        console.log("cashback", e)
        navigator.clipboard.writeText(e)
        switch (e) {
            case "MEDI40":
                setIsCopySuccess(true)
                break;
            case "MED25":
                setIsCopySuccess(true)
                break;
            case "SARVA":
                setIsCopySuccess(true)
                break;
            case "GRAND25":
                setIsCopySuccess(true)
                break;
            default:
                return setIsCopySuccess(false)
            // break;
        }
    }
    useEffect((e) => {
        if (isCopySuccess !== e) {
            const id = setTimeout(() => {
                console.log("Running Interval");
                setIsCopySuccess(e);
            }, 2000);

            return () => {
                console.log("Clearing Interval");
                clearTimeout(id);
            }
        }
    }, [isCopySuccess])


    const renderDataMain = ({ CashbackData }) => {
        if (CashbackData) {
            if (CashbackData.length > 0) {
                return CashbackData.map((item) => {
                    return (
                        <div className="CashVV" key={item._id}>
                            <div className='img_width'>
                                <img src={item.cashback_thumb} alt={item.cashback_head} />
                            </div>
                            <div className="Cashead">
                                <h4>{item.cashback_head}</h4>
                            </div>
                            <div className="subdiv">
                                <h3 className="mrp5">{item.cashback_subhead}</h3>
                            </div>
                            <hr className='line' style={{ border: '1px dashed gray', overflow: 'hidden', marginTop: '2px' }} />
                            <div className="discCoupon">
                                <img src="https://img.icons8.com/ultraviolet/40/null/add-ticket.png" alt='coupon' /><input type='text' className='h3' ref={textAreaCopy} value={item.cashback_coupon} disabled />
                            </div>
                            {
                                item.cashback_coupon === "Code Not Required" ? "" :
                                    <div className="copy">
                                        <button onClick={() => textCopy(item.cashback_coupon)}>Copy Code</button>
                                    </div>
                            }
                            <span className='circle1'></span>
                            <span className='circle2'></span>
                        </div>
                    )
                })
            } else {
                return (
                    <div>
                        <h3>No Data For Filter Applied</h3>
                    </div>
                )
            }
        } else {
            return (

                <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }} >
                    <img src="https://i.ibb.co/yP1frVK/cupertino-activity-indicator.gif" alt='Loading...' style={{ width: '90px', height: '90px' }} />
                    <h4>Wait a While...</h4>
                </div>
            )
        }

    }



    return (
        <div id='cashbackList'>
            <div className='success___massage'>
                {
                    !isCopySuccess ? "" : (<div className='success' style={{ color: '#000' }}><DoneAllIcon/>&emsp;coupon copied</div>)
                }
            </div>
            {renderDataMain(props)}
            {/* <div className='success___massage'>
              {
                !isCopySuccess? "": (<div className='success' style={{color: '#000'}}>coupon copied</div>)
              }
            </div> */}
        </div>
    )
}

export default OffersDisplay;


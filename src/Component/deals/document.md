import React, { Fragment, useEffect, useState } from "react";
// import HomeContainer from "../../redux/Container/HomeContainer";


const DealDisplay = (props) => {
    console.warn("props data", props)


    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://minodeapi.herokuapp.com/DealsPage2?state_id=").then((result) => {
            result.json().then((resp) => {
                setData(resp)
            })
        })
    },[])


    const renderData = ({ DealsData }) => {
        if (DealsData) {
            if (DealsData.length > 0) {
                return DealsData.map((item, index) => {
                    return (
                        <div className="Dealshead" key={index}>
                            <div className='img_deals'>
                                <img src={item.Deals_image} alt={item.Deals_tag} className="img-thumbnail" />
                            </div>
                            <div className="img_content">
                                <div className="deals2_head">
                                    <h4>{item.Deals_tag}</h4>
                                </div>
                                <div className="deals_subDiv">
                                    <h3 className="mrp5">MRP <del>{item.Deals_OldMrp}</del></h3>
                                </div>

                                <div className="deals_copy">
                                    <h6 className="h6">{item.Deals_NewMrp}</h6>
                                </div>
                                <div className="deals_discCoupon">
                                    <span className='h3'>{item.Deals_discount}</span>
                                </div>
                                <div className="byn">
                                    <button type="submit" className="btn btn-success" onClick={() => props.addToCartHandler({ price: item.deals_newPrice, name: item.deals_heading, disc: item.deals_discount })}>Add to Card</button>
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
                <div>
                    <img src="https://i.ibb.co/yP1frVK/cupertino-activity-indicator.gif" style={{ width: '90px', height: '90px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} alt='Loading...' />
                    <h4>Wait a While...</h4>
                </div>
            )
        }
    }

    return (
        <Fragment>
            <div className="dealsDetails">
                {renderData(props)}
            </div>
        </Fragment>
    )
}

export default DealDisplay;




 // const product = useSelector((state) => state.product);
 // const { Deals_id, Deals_tag, Deals_image, Deals_OldMrp, Deals_NewMrp, Deals_discount } = product;
 // console.log("redux-data", product)
 // console.warn("redux-product", Deals_id)
 // const { state_id } = useParams();
 // const dispatch = useDispatch();
 // const [searchParams, setSearchParams] = useSearchParams();
 // setSearchParams(product)
 // console.log("paramsData: ",searchParams.get("product"))
 // console.log("paramsData: ",searchParams.get("name"))
 // console.log("paramsData: ",searchParams.get("age"))
 // console.log("paramsData2: ",setSearchParams)
 // const fetchDealProducts = async () => {
 // const response = await axios
 // .get(`https://minodeapi.herokuapp.com/DealsPage2?${state_id}`)
 // .catch((err) => {
 // console.log("DealDisplay Err:", err)
 // })
 // dispatch(selectedProduct(response.data))
 // }
 // useEffect(() => {
 // sessionStorage.setItem("user-data", JSON.stringify(resp))
 // localStorage.setItem("user-data", JSON.stringify(resp))
 // if (state_id && state_id !== "") {
 // dispatch(fetchProduct((state_id)))
 // }
 // else {
 // console.warn("there is an error")
 // }
 //   Navigate('?')
 // }, [state_id])
// @ts-nocheck
import React from "react";
import { useSelector } from "react-redux";
import './DealsMain.css';

const DealProducts = () => {
    const product = useSelector((state) => state.product)

    console.log("selected product", product)

    // const [data, setData] = useState([]);


    const renderList = product.map((productItem) => {
        const { Deals_image, Deals_tag, Deals_discount, Deals_NewMrp, Deals_OldMrp, _id } = productItem

        return (
            <div className="Dealshead" key={_id}>
                <div className='img_deals'>
                    <img src={Deals_image} alt={Deals_tag} className="img-thumbnail" />
                </div>
                <div className="img_content">
                    <div className="deals2_head">
                        <h4>{Deals_tag}</h4>
                    </div>
                    <div className="deals_subDiv">
                        <h3 className="mrp5">MRP <del>{Deals_OldMrp}</del></h3>
                    </div>

                    <div className="deals_copy">
                        <h6 className="h6">{Deals_NewMrp}</h6>
                    </div>
                    <div className="deals_discCoupon">
                        <span className='h3'>{Deals_discount}</span>
                    </div>
                    <div className="byn">
                        <button type="submit" className="btn btn-success"
                        // onClick={() =>
                        // props.addToCartHandler(
                        // {
                        // price: item.deals_newPrice, name: item.deals_heading, disc: item.deals_discount
                        // }
                        // )
                        // }
                        >Add to Card</button>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            {renderList}
        </>
    )

}

export default DealProducts;
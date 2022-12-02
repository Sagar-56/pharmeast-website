// @ts-nocheck
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Deals.css';
// import axios from "axios";
import { fetchProducts } from "../../redux/Action/Action";
import DealsProducts from "./DealsProducts";


const DealsDisplay = () => {
    const products = useSelector((state) => state)
    console.log("dealsDisplay", products)

    const dispatch = useDispatch();

    // fetchProducts
    //////////////////
    // const fetchProducts = async () => {
        // const response = await axios
            // .get("https://minodeapi.herokuapp.com/dealsdata")
            // .catch((err) => {
                // console.log("Err", err)
            // })
        // dispatch(setProducts(response.data))
    // }

    // useEffect
    ///////////////
    useEffect(() => {
       dispatch( fetchProducts());
    }, [])


    return (
        <>
            <div className="labtestdiv">
                <a href="#id"><img src="https://cdn01.pharmeasy.in/dam/banner/banner/c5ae1494075-DesktopTrust.png" alt="pharmeasy.img" /></a>
            </div>
            <div className="backcoldiv">
                <div className="backcoldiv2">
                    <div className="back-col-head">
                        <div className="start">
                            <div className="back-col-img">
                                <img src="https://assets.pharmeasy.in/web-assets/dist/cc9b301d.svg" alt="pharm-easy.img" />
                            </div>
                            <div className="data-time">
                                <div className="back-col-img3" style={{ paddingBottom: '5px' }}> <h2>Deals of the Day &nbsp;<span style={{ color: "#e8e8e8" }}>|</span></h2></div>&emsp;

                                <div className="back-col-img4"><h2>21:01:12 left</h2></div>
                            </div>
                        </div>
                        <div className="end">
                            <div className="back-col-arrow-div">
                                <div className="backcolall"><a href="#id">View All</a></div>
                            </div>
                            <div className="back-col-arrow">
                                <span className="backcolleftarrow"><ion-icon name="arrow-back"></ion-icon></span>&emsp;
                                <span className="backcolrightarrow"><ion-icon name="arrow-forward"></ion-icon></span>
                            </div>
                        </div>
                    </div>
                    <div className="backcolimgcont">
                        <DealsProducts />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DealsDisplay;
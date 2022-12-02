import React, { Component } from "react";
import './headbottompage.css';
import { Link } from 'react-router-dom'
import Offer from "./Offer";


class headbottompage extends Component {
    render() {
        return (
            <>
                <div className="boxdiv">
                    <div className="box">
                        <Link to={`/order/Order`} target={"_parent"}>
                            <div className="imgcont imgcont1">
                                <div className="content content1">
                                    <div className="cont">
                                        <span className="off1">FLAT</span>&ensp;
                                        {/* <strike style={{color: 'black'}}><span className="off1">15%</span></strike>&ensp; */}
                                        <span className="off1">18% OFF</span>
                                    </div>
                                    <div className="heading">
                                        <h2>Order Medicines</h2>
                                    </div>
                                </div>
                                <img src="https://assets.pharmeasy.in/web-assets/dist/7c645a8d.png" alt="pharmeasy.img" />
                            </div>
                            <div className="btn1 btnn">
                                <button type="submit">Order Now</button>
                            </div>
                        </Link>
                    </div>

                    <div className="box">
                        <Link to={`Offer/OfferListing`} target={"_parent"}>
                            <div className="imgcont imgcont2">
                                <div className="content content2">
                                    <div className="cont1">
                                        <span className="off">UPTO</span>&ensp;
                                        <span className="off">60% OFF</span>
                                    </div>
                                    <div className="heading1">
                                        <h2>Healthcare Products</h2>
                                    </div>
                                </div>
                                <img src="https://assets.pharmeasy.in/web-assets/dist/c7c7095b.png" alt="pharmeasy.img" />
                            </div>
                            <div className="btn2 btnn">
                                <button type="submit">Order Now</button>
                            </div>
                        </Link>
                    </div>

                    <div className="box">
                        <a href="#id">
                            <div className="imgcont imgcont3">
                                <div className="content content3">
                                    <div className="heading2">
                                        <h2>Lab Tests</h2>
                                        <h4>
                                            <span className="newStyle"></span>
                                            NEW
                                        </h4>
                                    </div>
                                </div>
                                <img src="https://assets.pharmeasy.in/web-assets/dist/e1d3ac1c.png" alt="pharmeasy.img" />
                            </div>
                            <div className="btn3 btnn">
                                <button type="submit">Book Now</button>
                            </div>
                        </a>
                    </div>
                </div>

                <a href="#id"><div className="plusmember">
                    <div className="plusmemberimg">
                        <img src="https://assets.pharmeasy.in/web-assets/dist/e3db129c.png" alt="pharmeasy.img" />
                    </div>
                    <div className="plusmemberpara">
                        <p>Save flat <b>5%</b> extra on medicines and <b>FREE</b> delivery with <b>PLUS</b> Membership <b></b></p>
                    </div>
                    <div className="plusmembersecimg">
                        <img src="https://assets.pharmeasy.in/web-assets/dist/b20b0932.png" alt="pharmeasy.img" />
                    </div>

                </div>
                </a>
            </>
        )
    }
}

export default headbottompage;
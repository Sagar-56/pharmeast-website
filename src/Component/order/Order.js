import React, { Component } from "react";
import './Order.css';
// import axios from "axios";
// import FeatureDisplayNext from "./OrderDisplay";

// const Url = "https://minodeapi.herokuapp.com/featurePage2?state_id="

class FeatureMain extends Component {
    // constructor(props){
    //     super(props)

    //     this.state={
    //         FeatureName:''
    //     }
    // }


    render() {
        return (
            <>
                <div className="OrderMedicine">
                    <div className="orders">
                        {/* <div className="OrderMedicines"> */}
                            <div className="OrderMedicines___2">
                                <div className="prescriptionDiv">
                                    <div className="upload">
                                        <span>
                                            <img src="https://assets.pharmeasy.in/web-assets/dist/3d74cbff.svg" alt="img" />
                                        </span>
                                        <h3>Please upload images of your prescription.</h3>
                                    </div>
                                </div>
                                <div className="OrderMedicines2">
                                    <div className="orderSerch">
                                        <div className="img1">
                                            <img src="https://assets.pharmeasy.in/web-assets/dist/e434fe12.svg" alt="img" />
                                        </div>
                                        <div className="prescri">
                                            <h2>Upload</h2> <h3>Prescription  &emsp; &emsp;<i className="fa-solid fa-angle-right"></i></h3>
                                        </div>

                                    </div>
                                    <div className="prescription1">
                                        <div className="img1">
                                            <img src="https://assets.pharmeasy.in/web-assets/dist/39f6dddf.svg" alt="" />
                                        </div>
                                        <div className="prescri">
                                            <h3>Prescriptions from  PharmEasy  &emsp; &emsp; <i className="fa-solid fa-angle-right"></i></h3>
                                        </div>
                                    </div>
                                    <div className="prescription2">
                                        <div className="img1">
                                            <img src="https://assets.pharmeasy.in/web-assets/dist/e434fe12.svg" alt="img" />
                                        </div>
                                        <div className="prescri">
                                            <h2>Uploaded</h2> <h3>Prescription  &emsp; &emsp;<i className="fa-solid fa-angle-right"></i></h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="CheckOut">
                                    <a href="#id"> Proceed to Checkout </a>
                                </div>
                            {/* </div> */}

                        </div>

                        <div className="DontHavePrescription">
                            <div className="nopres"><span><img src="https://assets.pharmeasy.in/web-assets/dist/3d74cbff.svg" alt="img" /></span> <h3>Don't Have prescription?</h3></div>
                            <ul className="ul">
                                <li>Add medicines to your cart.</li>
                                <li>Select Free Doctor Consultation at checkout.</li>
                            </ul>
                            <a href="#id" style={{ textDecoration: 'none' }}><div className="phone">
                                <span className="call">Or Call</span>
                                <span>+91 99929 99929</span>
                                <span className="ico"><ion-icon name="call"></ion-icon></span>
                            </div></a>
                        </div>
                    </div>

                    {/* <!-- <hr style={{position: 'absolute', color: 'red', display: 'inline-block'}}/> --> */}
                    <div className="securityDiv">
                        <div className="security1">
                            <div>
                                <img src="https://assets.pharmeasy.in/web-assets/dist/9ac2da37.svg?dim=0x72&dpr=1.5&q=100" alt="img" />
                            </div>
                            <div>
                                <h2>1 Lakh+ Products</h2>
                                <p>We maintain strict quality controls on all our partner retailers, so that you always get standard quality products.</p>
                            </div>
                        </div>
                        <div className="security2">
                            <div>
                                <img src="https://assets.pharmeasy.in/web-assets/dist/2f258fe0.svg?dim=0x72&dpr=1.5&q=100" alt="img" />
                            </div>
                            <div>
                                <h2>Secure Payment</h2>
                                <p>100% secure and trusted payment protection</p>
                            </div>
                        </div>
                        <div className="security3">
                            <div>
                                <img src="https://assets.pharmeasy.in/web-assets/dist/256fe591.svg?dim=0x72&dpr=1.5&q=100" alt="img" />
                            </div>
                            <div>
                                <h2>Easy Return</h2>
                                <p>We have a new and dynamic return window policy for medicines and healthcare items. Refer FAQs section for more details.</p>
                            </div>
                        </div>

                        {/* <FeatureDisplayNext FeatData={this.state.FeatureName}/> */}

                    </div>
                </div>
            </>
        )
    }

    //      {/* componentDidMount(){
    //      let stateId = this.props.match.params.id?this.props.match.params.id:1
    //      sessionStorage.setItem('stateId', stateId)
    //      axios.get(`${Url}${stateId}`)
    //      .then((res) => {this.setState({FeatureName:res.data})})
    //    } */}


}

export default FeatureMain;
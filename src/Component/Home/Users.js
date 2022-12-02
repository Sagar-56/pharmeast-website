import React, { Component } from "react";
import './Users.css';


class Users extends Component {
    render() {
        return (
            <>
                <div className="user-div">
                    <div className="user">
                        <div className="user-img">
                            <img src="https://assets.pharmeasy.in/web-assets/dist/4d2f7c48.svg" alt="pharmEasy.image" />
                            <div className="user-cont">
                                <h1>25 Million</h1>
                                <p>Registered Users as of Jun 30, 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-img user-img2">
                            <img src="https://assets.pharmeasy.in/web-assets/dist/92c372bb.svg" alt="pharmEasy.image" />


                            <div className="user-cont">
                                <h1>8.8 Million</h1>
                                <p>PharmEasy Orders as of FY21</p>
                            </div>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-img user-img2">
                            <img src="https://assets.pharmeasy.in/web-assets/dist/773ae9c5.svg" alt="pharmEasy.image" />

                            <div className="user-cont">
                                <h1>50k+</h1>
                                <p>SKUs sold in Q1FY22</p>
                            </div>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-img user-img2">
                            <img src="https://assets.pharmeasy.in/web-assets/dist/f2d557d3.svg" alt="pharmEasy.image" />

                            <div className="user-cont">
                                <h1>18k+</h1>
                                <p>Pin-Codes Serviced for the month of June 2021</p>
                            </div>
                        </div>
                    </div>
                </div>



            </>
        )
    }
}

export default Users;
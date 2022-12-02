import React, { Component, useEffect, useState } from "react";
import './customers.css';
import customerDetails from "./customerList";
import Slider from 'react-slick'

// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";


class Customers extends Component {
    // $("#start")
    // $(".start")
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            draggable: true,
            arrows: false,
            variableWidth: true,
            centerPadding: '0px',
            pauseOnFocus: true,
            pauseOnHover: false
        };

        return (
            <>
                <div className="pinodesdiv">
                    <div className="pinodeshead">
                        <div className="pinodeshead2">
                            <h2>What our customers have to say</h2>
                        </div>
                        {/* <div className="pinodesheadarrow"> */}
                        {/* <span className="pincodeleftarrow arrow-prev arrow" onClick={nextSlides}><ArrowBackIcon className="arrow___back" /></span> */}
                        {/* <span className="pincoderightarrow arrow-next arrow" onClick={prevSlides} style={{ marginLeft: '0px' }}><ArrowForwardIcon className="arrow___forward" /></span> */}
                        {/* </div> */}

                    </div>
                    <div className="pinodesimgcont" id="slide_image">
                        <Slider {...settings}>

                            {customerDetails.map((item, index) => {
                                return (
                                    // <Slider ref={slider => (this.slider = slider)} {...settings} key={index}>
                                    <div className={"pinodesimg pinodesimg2"} key={index}>
                                        <div className="pincont">
                                            <h3>{item.name}</h3>
                                            <h4>{item.date}</h4>
                                        </div>
                                        <div className="customer___content">
                                            <div className="pinimg">
                                                <img src="https://assets.pharmeasy.in/web-assets/dist/d29d41d8.svg" alt="pharmeasy.img" />
                                            </div>
                                            <div className="pincontent">
                                                <p>{item.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                    // </Slider>
                                )
                            })}
                        </Slider>

                    </div>
                </div>

            </>
        )
    }
}

export default Customers;
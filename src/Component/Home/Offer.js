import React, { Component, createRef } from "react";
import './Offer.css'
import OfferDisplay from './OfferDisplay';


import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


// let Url = "https://minodeapi.herokuapp.com/cashbackdetails"
let Url ="https://good-gray-wombat-ring.cyclic.app/cashbackdetails"

class Offer extends Component {

    constructor(props) {
        // console.warn("prev___component", props)
        super(props)
        this.state = {
            CashBack: '',
            // color: true
        }
    }

    render() {

        let offHead = document.getElementById("off-Slide")
        let item = offHead?.getElementsByClassName("offb")

        const prevSlide = (event) => {
            offHead.append(item[0])
            event.target.style.transition="0.5s"
            // this.setState({color: !this.state.color})
        }

        const nextSlide = (event) => {
            offHead.prepend(item[item.length -1])
            event.target.style.transition="0.5s"

            // this.setState({color: !this.state.color})
        }
        // let color_btn = this.state.color? "arrow___back": "arrow___back__i"
        return (
            <>
                <div className="offersdiv">
                    <div className="offercontent">
                        <div className="offimg">
                            <div className="off___img">
                                <img src="https://assets.pharmeasy.in/web-assets/dist/67890676.svg" alt="pharmeasy.img" className="offimg2" />
                            </div>
                            <div>
                                <h1 className="offyou">Offers Just For You</h1>
                            </div>
                        </div>
                        <div className="offcont">
                            <div className="offall"><a href="#id">See All Offers</a></div>
                            <div className="offarrow">
                                <span className="leftarrow" onClick={nextSlide} style={{ margin: 'auto 20px' }}><ArrowBackIcon className="arrow___back" /></span>
                                <span className="rightarrow" onClick={prevSlide}><ArrowForwardIcon className="arrow___forward" /></span>
                            </div>
                        </div>
                    </div>
                    <OfferDisplay cashbackData={this.state.CashBack} />
                </div>
            </>
        )
    }
    componentDidMount() {
        fetch(Url, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ CashBack: data })
            })
    }
}

export default Offer;
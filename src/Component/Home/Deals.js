// @ts-nocheck
import React, { Component } from "react";
import './Deals.css';
import DealsProducts from "./DealsProducts";


import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

let DUrl = "https://minodeapi.herokuapp.com/dealsdata";

class Deals extends Component {
    constructor() {
        super()
        this.state = {
            DealName: '',
            time: {
                hours: 0,
                minutes: 0,
                seconds: 0
            },
            // duration: 21 * 12 * 2,
            duration: 200 * 60 * 1000,
            timer: null
        }
        this.state.startTimer = this.start.bind(this)
    }


    msTimer(duration) {
        let seconds = Math.floor((duration / 1000) % 60)
        let minutes = Math.floor((duration / (1000 * 60)) % 60)
        let hours = Math.floor((duration / (1000 * 60 * 60)) % 24)


        hours = hours.toString().padStart(2, '0')
        minutes = minutes.toString().padStart(2, '0')
        seconds = seconds.toString().padStart(2, '0')

        return {
            hours,
            minutes,
            seconds
        }

    }

    start() {
        if (!this.state.timer) {
            this.state.startTimer = Date.now();
            this.timer = window.setInterval(() => this.run(), 10)
        }
    }

    run() {
        const diff = Date.now() - this.state.startTimer;


        // If you want to count up
        this.setState(() => ({
            time: this.msTimer(diff)
        }));

        let remaining = this.state.duration - diff;
        if (remaining < 0) {
            remaining = 0;
        }

        this.setState(() => ({
            time: this.msTimer(remaining)
        }));
        if (remaining === 0) {
            window.clearTimeout(this.timer);
            this.time = null;
        }
    }
    render() {
        let dealsSlide = document.getElementById("deals___slide")
        let dealsItem = dealsSlide?.getElementsByClassName("backcolimg")

        const prevSlideDeals = (event) => {
            dealsSlide.append(dealsItem[0])
            event.target.classList.add("offTrans")
            event.target.style.transition = "0.5s"
            // this.setState({color: !this.state.color})
        }

        const nextSlidesDeals = (event) => {
            dealsSlide.prepend(dealsItem[dealsItem.length - 1])
            event.target.classList.add("offTrans")
            event.target.style.transition = "0.5s"

            // this.setState({color: !this.state.color})
        }
        // window.onload=this.state.startTimer;
        // this.componentWillUnmount=()=>{
            // window.onload=this.state.startTimer;
        // }
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
                                    <img src="https://assets.pharmeasy.in/web-assets/dist/cc9b301d.svg"
                                        alt="pharm-easy.img" />
                                </div>
                                <div className="data-time">
                                    <div className="back-col-img3" style={{ paddingBottom: '5px' }}>
                                        <h2>Deals of the Day &nbsp;<span style={{ color: "#e8e8e8" }}>|</span></h2></div>&emsp;
                                    <div className="back-col-img4">
                                        {this.state.duration === 0 ? (<h2>offer Ends</h2>) :
                                            (<h2>{this.state.time.hours} : {this.state.time.minutes} : {this.state.time.seconds} left</h2>)
                                        }
                                        {/* <button onClick={this.state.startTimer}>start</button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="end">
                                <div className="back-col-arrow-div">
                                    <div className="backcolall"><a href="#id">View All</a></div>
                                </div>
                                <div className="back-col-arrow">
                                    <span className="backcolleftarrow" onClick={nextSlidesDeals}><ArrowBackIcon className="arrow___back" /></span>&emsp;
                                    <span className="backcolrightarrow" onClick={prevSlideDeals}><ArrowForwardIcon className="arrow___forward" /></span>
                                </div>
                            </div>
                        </div>

                        <DealsProducts DealData={this.state.DealName} />

                    </div>
                </div>
            </>
        )
    }

    componentDidMount = async () => {
        await fetch(DUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ DealName: data })
            })
    }
}

export default Deals;
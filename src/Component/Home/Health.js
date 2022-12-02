// @ts-nocheck
import React, { Component } from "react";
import './Health.css';
// import HealthDisplay from './HealthDisplay';


let HUrl = "https://minodeapi.herokuapp.com/healthArticle"

class Health extends Component {
    constructor() {
        // @ts-ignore
        super()
        this.state = {
            HealthName: ''
        }
    }
    render() {
        return (
            <>
                <div className="Health Articles">
                    <div className="Healthheaddiv">
                        <div className="Healthhead">
                            <h2>Health Articles</h2>
                        </div>
                        <div className="Healthhead2">
                            <div className="Healthall"><a href="#id">See All</a></div>
                            <div className="Healtharrow">
                                <span className="Healthleftarrow"><ion-icon name="arrow-back"></ion-icon></span>
                                <span className="Healthrightarrow"><ion-icon name="arrow-forward"></ion-icon></span>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    {/* <HealthDisplay HealthData={this.state.HealthName}/> */}
                </div>
            </>
        )
    }
    componentDidMount() {
        fetch(HUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ HealthName: data })
            })
    }
}

export default Health;
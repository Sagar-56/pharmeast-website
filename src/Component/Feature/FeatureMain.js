import React, { Component } from "react";
import './FeatureMain.css';
import axios from "axios";
import FeatureDisplayNext from "./FeatureDisplayNext";

// const Url = "https://minodeapi.herokuapp.com/featurePage2?state_id="
const Url = "https://good-gray-wombat-ring.cyclic.app/featurePage2?state_id="

class FeatureMain extends Component {
    constructor(props) {
        super(props)

        this.state = {
            FeatureName: ''
        }
    }


    render() {
        return (
            <>
                <div className="feat">
                    <div className="Fall">
                        <h2 className="All2">All</h2>
                    </div>

                    <FeatureDisplayNext FeatData={this.state.FeatureName} />

                </div>
            </>
        )
    }

    componentDidMount() {
        let stateId = this.props.match.params.id ? this.props.match.params.id : 1
        sessionStorage.setItem('stateId', stateId)
        axios.get(`${Url}${stateId}`)
            .then((res) => { this.setState({ FeatureName: res.data }) })
    }


}

export default FeatureMain;
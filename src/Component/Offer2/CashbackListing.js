import React, { Component } from "react";
import axios from 'axios';
import './cashbackListing.css';
import OffersDisplay from './OffersDisplay';


const CUrl = "https://minodeapi.herokuapp.com/cashbackdetailsPage2?state_id="

class offerListing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            CashbackName: ''
        }

    }


    render() {
        return (

            <>
                <div className="casgbackmain_div">
                    <OffersDisplay CashbackData={this.state.CashbackName} />
                    <div className="user_module">
                        <div>

                        </div>
                    </div>
                </div>
            </>


        )
    }

    //page load call api 
    componentDidMount() {
        let cashbackId = this.props.match.params.id ? this.props.match.params.id : 1
        sessionStorage.setItem('cashbackId', cashbackId)
        axios.get(`${CUrl}${cashbackId}`)
            .then((res) => { this.setState({ CashbackName: res.data }) })
    }

}



export default offerListing;
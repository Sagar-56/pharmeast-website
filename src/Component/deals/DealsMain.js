import React, { Component } from "react";
import './DealsMain.css';
import DealDisplay from "./DealDisplay";
import axios from "axios";
import { connect } from 'react-redux'
import { addToCart } from "../../redux/Action/Action";


// const DealsUrl = "https://minodeapi.herokuapp.com/DealsPage2?state_id="
const DealsUrl = "https://good-gray-wombat-ring.cyclic.app/DealsPage2?state_id="

class DealsMain extends Component {

    constructor(props) {
        // console.warn("addtocart", props)
        super(props)
        this.state = {
            DealsName: '',
            product: props,
        }

    }

    render() {
        return (
            <>
                <div className="dealsPage2">
                    <DealDisplay DealsData={this.state.DealsName} products={this.state.product} />

                    <div className="carouselBottom">

                    </div>
                </div>
            </>
        )
    }

    componentDidMount = async () => {
        let stateId = await this.props.match.params.id ? this.props.match.params.id : 1
        sessionStorage.setItem('stateId', stateId)
        axios.get(`${DealsUrl}${stateId}`)
            .then((res) => {
                this.setState({ DealsName: res.data })
            })
    }


}
const mapStateToProps = (state) => ({
    data: state
})

const mapDispatchToProps = (dispatch) => ({
    addToCardHandler: (data) => dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(DealsMain)
// export default DealsMain;
import React, { Component } from "react";
import './Featured.css';
import FeatureDisplay from './FeatureDisplay'


import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// let FUrl = "https://minodeapi.herokuapp.com/feature"
let FUrl = "https://good-gray-wombat-ring.cyclic.app/feature"

class Featured extends Component {
  constructor() {
    super()
    this.state = {
      FeatureName: ''
    }
  }
  render() {
    let featureSlide = document.getElementById("feature___div")
    let itemFeat = featureSlide?.getElementsByClassName("featureimgcont")

    const prevFeatSlide = (event) => {
      featureSlide.append(itemFeat[0])
      event.target.classList.add("offTrans")
      event.target.style.transition = "0.5s"
      // this.setState({color: !this.state.color})
    }

    const nextFeatSlide = (event) => {
      featureSlide.prepend(itemFeat[itemFeat.length - 1])
      event.target.classList.add("offTrans")
      event.target.style.transition = "0.5s"

      // this.setState({color: !this.state.color})
    }
    return (
      <>
        <div className="featurediv">
          <div className="featurecont">
            <div className="featurefeat">
              <h3>Featured Brands</h3>
            </div>
            <div className="featurearrow">
              <span className="featleftarrow" onClick={nextFeatSlide}><ArrowBackIcon className="arrow___back" /></span>
              <span className="featrightarrow" onClick={prevFeatSlide}><ArrowForwardIcon className="arrow___forward" /></span>
            </div>
          </div>
          <FeatureDisplay FeatureData={this.state.FeatureName} />
        </div>
      </>
    )
  }
  componentDidMount() {
    fetch(FUrl, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ FeatureName: data })
      })
  }
}

export default Featured;
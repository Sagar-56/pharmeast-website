import React, { Component } from "react";
import './Carousel.css'



class nav extends Component{
    render(){
        return(
            <>
        <div className="carousel slide" id="mySlider" data-ride="carousel" style={{display:'inline-block'}}>
            <div className="carousel-inner">
                <ol className="carousel-indicators">
                    <li data-target="#mySlider"  data-slide-to="0" className="active dot"></li>
                    <li data-target="#mySlider"  data-slide-to="1"></li>
                    <li data-target="#mySlider"  data-slide-to="2"></li>
                    <li data-target="#mySlider"  data-slide-to="3"></li>
                    <li data-target="#mySlider"  data-slide-to="4"></li>
                </ol>
              <div className="item active">
                 <img src="https://cms-contents.pharmeasy.in/banner/ff62f53c2ba-GRAND25DWEB.jpg" alt="img"/>
              </div>
             <div className="item">
                 <img src="https://cms-contents.pharmeasy.in/banner/60fb9bbcf9a-DWEB.jpg" alt="img"/>
              </div>
              <div className="item">
                 <img src="https://cms-contents.pharmeasy.in/banner/c779a38822e-Loss_Dweb_.jpg" alt="img"/>
             </div>
             <div className="item">
                 <img src="https://cms-contents.pharmeasy.in/banner/b06a67e4fc7-Sarva_dWeb.jpg" alt="img"/>
             </div>
             <div className="item">
                 <img src="https://cms-contents.pharmeasy.in/banner/dd96b2e3812-Yoga_Dweb.jpg" alt="img"/>
             </div>
             <a href="#mySlider" className="left carousel-control  left-caro" data-slide="prev" style={{fontSize: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><ion-icon name="chevron-back-outline"></ion-icon></a>
             <a href="#mySlider" className="right carousel-control right-caro" data-slide="next" style={{fontSize: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><ion-icon name="chevron-forward-outline"></ion-icon></a>
            </div>
        </div>
        </>
        )
    }
}


export default nav;
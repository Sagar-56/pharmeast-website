import React, { Fragment } from "react";
import './Footer.css';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = (props) => {
    return (
        <>
            <footer>
                <div className="footerdiv">
                        <ul className="footer-col">
                            <li className="foothead">Company</li>
                            <li><a href="#link">About Us</a></li>
                            <li><a href="#link">Careers</a></li>
                            <li><a href="#link">Blog</a></li>
                            <li><a href="#link">Partner with PharmEasy</a></li>
                            <li><a href="#link">Sell at PharmEasy</a></li>
                        </ul>
                        <ul className="footer-col">
                            <li className="foothead">Featured Categories</li>
                            <li><a href="#link">Featured Categories</a></li>
                            <li><a href="#link">Covid Essentials</a></li>
                            <li><a href="#link">Healthcare Devices</a></li>
                            <li><a href="#link">Health Food and Drinks</a></li>
                            <li><a href="#link">Personal Care</a></li>
                        </ul>
                        <ul className="footer-col">
                            <li className="foothead">Need Help</li>
                            <li><a href="#link">Browse All Medicines</a></li>
                            <li><a href="#link">Browse All Molecules</a></li>
                            <li><a href="#link">Browse All Cities & Areas</a></li>
                            <li><a href="#link">FAQs</a></li>
                        </ul>
                    <div className="footerlink">
                        <h4>FOLLOW US</h4>
                        <a href="#link"><InstagramIcon className="i" /></a>
                        <a href="#link"><FacebookIcon className="i" /></a>
                        <a href="#link"><YouTubeIcon className="i"/></a>
                        <a href="#link"><TwitterIcon className="i"/></a>

                    </div>
                </div>
                <div className="sociallinksdiv">
                    <div className="sociallinks">
                        <h2>Our Payment Partners</h2>
                        <a href="#link" ><img src="https://assets.pharmeasy.in/web-assets/dist/af0c6812.svg" alt="pharmeasy.img" className="img1" /></a>
                        <a href="#link"><img src="https://assets.pharmeasy.in/web-assets/dist/3a1a533d.svg" alt="pharmeasy.img" className="img2" /></a>
                        <a href="#link"><img src="https://assets.pharmeasy.in/web-assets/dist/4733a49d.svg" alt="pharmeasy.img" className="img2" /></a>
                        <a href="#link"><img src="https://assets.pharmeasy.in/web-assets/dist/b278e536.svg" alt="pharmeasy.img" className="img2" /></a>
                        <a href="#link"><img src="https://assets.pharmeasy.in/web-assets/dist/0aca2077.svg" alt="pharmeasy.img" className="img2" /></a>
                        <a href="#link"><img src="https://assets.pharmeasy.in/web-assets/dist/44a51ca5.svg" alt="pharmeasy.img" className="img2" /></a>
                        <a href="#link"><img src="https://assets.pharmeasy.in/web-assets/dist/d058b00d.svg" alt="pharmeasy.img" className="img1" /></a>
                        <a href="#link"><img src="https://assets.pharmeasy.in/web-assets/dist/e9445364.svg" alt="pharmeasy.img" className="img1" /></a>
                        <a href="#link"><img src="https://assets.pharmeasy.in/web-assets/dist/6e09c713.svg" alt="pharmeasy.img" className="img2" /></a>
                    </div>
                    <div className="copyright">&copy; 2022 PharmEasy. All Rights Reserved</div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
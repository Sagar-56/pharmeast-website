import React, { useState } from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import InputSearch from "./Input.js/InputSearch";
import { connect } from "react-redux";
import useScroll from "./useScroll";
import { useHistory } from "react-router-dom";
import HeaderSideBar from "./HeaderSider";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import BarChartIcon from '@mui/icons-material/BarChart';

const Header = (props) => {
    // console.warn("addtocarts: ", props.data.cardData)
    const [isNav, setIsNav] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        event.preventDefault()
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        e.preventDefault()
        setAnchorEl(null);
    };

    const handleClosing = (e) => {
        e.preventDefault()
        setIsNav(!isNav)
        e.target.style.transition = "0.3s"
    };


    const { scrollDirection } = useScroll();
    const styles = {
        active: {
            visibility: "visible",
            transition: "all 0.5s",
        },
        hidden: {
            visibility: "hidden",
            transition: "all 0.5s",
            transform: "translateY(-100%)",
        }

    }
    const history = useHistory();
    let auth = JSON.parse(localStorage.getItem('register'))
    const logOut = () => {
        localStorage.clear();
        history.push('/register');
        window.location.reload()
    }

    return (
        <>
            {auth ?
                (<>
                    <nav>
                        <div className="first-nav">
                            <div className="img-div">
                                <img src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt="pharmeasy.img" />
                            </div>
                        </div>
                        <div className="search-bar">
                            <InputSearch />
                        </div>

                        <div className="cart___offer___login">
                            <ul className="second-list">
                                <li><Link to={`/Offer2/CashbackListing`} target={"_parent"}><img src="https://assets.pharmeasy.in/web-assets/dist/275c07e1.svg" alt="Offers.img" /> Offers</Link></li>
                                <li
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    style={{ fontVariant: 'small-caps' }}
                                ><Link to={``} target='_parent'><img src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg" alt="Offers.img" style={{ color: 'red' }} />{auth ? `${auth.user.firstname}` : 'SignUp/SignIn'}</Link></li>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={logOut}>Logout</MenuItem>
                                </Menu>
                                <li>
                                    <Link to={`/cart`}>
                                        <span className="card___length">
                                            <h6>{props.data.cardData.length}</h6>
                                        </span>
                                        <img src="https://assets.pharmeasy.in/web-assets/dist/21b0b5ba.svg" alt="Offers.img" />
                                        Cart
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="side___bar">
                            <h1 onClick={handleClosing}><BarChartIcon className="side_bar_icon" /></h1>
                        </div>
                    </nav>

                    <div className="second-nav" style={scrollDirection === "up" ? styles.hidden : styles.active}>
                        <div className="b-header2">
                            <ul className="first-list">
                                <Link to={`/order`} target={"_blank"} style={{ listStyle: 'none', textDecoration: 'none' }}>
                                    <li>Order Medicines</li>
                                </Link>
                                <Link to={`/Offer`} target={"_blank"} style={{ listStyle: 'none', textDecoration: 'none' }}>
                                    <li>Healthcare Products</li>
                                </Link>
                                <Link to={`/Offer`} target={"_blank"} style={{ listStyle: 'none', textDecoration: 'none' }}>
                                    <li>Lab Tests</li>
                                </Link>
                                <Link to={`/Offer`} target={"_blank"} style={{ listStyle: 'none', textDecoration: 'none' }}>
                                    <li>RTPCR</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </>) : (
                    <>
                        <nav>
                            <div className="first-nav">
                                <div className="img-div">
                                    <img src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt="pharmeasy.img" />
                                </div>
                            </div>

                            <div className="cart___offer___login">
                                <ul className="second-list">
                                    <li data-toggle="modal" data-target="#myModal"><Link to={`/register`} target='_parent'><img src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg" alt="Offers.img" /> Login / Signup</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </>

                )
            }
            {isNav ? < HeaderSideBar auth={auth} logOut={logOut} data={props.data.cardData.length} isNav={isNav} setNav={setIsNav} /> : null}
        </>
    )
}
const mapStateToProps = (state) => ({
    data: state.cardItems,
})

export default connect(mapStateToProps, null)(Header)
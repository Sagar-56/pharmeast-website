import React from 'react';
import { Link } from 'react-router-dom';

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";


const HeaderSideBar = (props) => {
  // console.warn("props", props)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [close, setClose] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
      event.preventDefault()
      setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
      e.preventDefault()
      setAnchorEl(null);
  };
  const handleClosed = (e) => {
      e.preventDefault()
      // setClose(true);
      props.setNav(!props.isNav)
      // e.target.style.transition= "0.3s"
  };

  return (
    <div className='sidebar___lists'>

    <div className='sidebar___list'>
      <h2 onClick={handleClosed}>&times;</h2>
      <div className="cart___offer___login2">
        <ul className="second-list">
          <li
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={{ textTransform: 'uppercase' }} 
          ><Link to={``} target='_parent'><img src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg" alt="Offers.img" />{props.auth ? `${props.auth.user.firstname}` : 'SignUp/SignIn'}</Link></li>
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
            <MenuItem onClick={props.logOut}>Logout</MenuItem>
          </Menu>
          <li onClick={handleClosed}>
            <Link to={`/cart`}>
              <span className="card___length">
                <h6>{props.data}</h6>
              </span>
              <img src="https://assets.pharmeasy.in/web-assets/dist/21b0b5ba.svg" alt="Offers.img" />
              Cart
            </Link>
          </li>
          <li onClick={handleClosed}><Link to={`/offer2/CashbackListing`} target={"_parent"}><img src="https://assets.pharmeasy.in/web-assets/dist/275c07e1.svg" alt="Offers.img" /> Offers</Link></li>

        </ul>
      </div>

    </div>
    </div>
  )
}

export default HeaderSideBar;
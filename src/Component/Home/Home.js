import React,{useEffect} from "react";
import Nav from './Carousel';
import Heading from './headbottompage'
import Offer from './Offer';
import Featured from "./Featured";
import Users from "./Users";
import Customer from "./customers";
import App from "./App";
import Deals from "./Deals";
import HeaderDisplay from "../../HeaderDisplay";
import { useHistory } from "react-router-dom";
import HeaderSideBar from "../../HeaderSider";

const Home = () => {

  const history=useHistory()
  
  let auth = localStorage.getItem('register')
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("register"))) {
        history.push("/")
    }
}, [])

  return (
    <>{!auth ?
      <HeaderDisplay />
      :
      (<>
      <Nav/>
        <Heading />
        <Offer />
        <Featured />
        <Deals />
        <Users />
        <Customer />
        <App />
        <HeaderSideBar />
      </>
      )
    }
    </>
  )
}

export default Home;
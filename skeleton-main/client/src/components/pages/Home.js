import React from "react";

import logo from '../../../dist/Tempus.png';

import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";


import "../../utilities.css";
import "./Home.css";

const Home = (props) => {

    //TODO: new class setup

    return (
    <div>
        <div className="image-container">
            <img src={logo} alt="logo"/> </div>
       <button className="button-container1">Log In</button>
       <button className="button-container1" onClick={() => location.assign(`/classsetup`)}> Add New Class</button>
       <button className="button-container1" onClick={() => location.assign(`/courses`)}> My Schedule</button>
       <button className="button-container1">About Tempus</button>

    </div>
           
        
        
    )

}

export default Home;

import React from "react";
import Logo from "../../assets/img/logo light.svg";
import classes from "./Logo.module.css";

const logo = () => 
(
    <div className= { classes.Logo }>
    <img src={Logo} alt="White Loudspeaker (i.e the logo)"/>
    </div>

);

export default logo;
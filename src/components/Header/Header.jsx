import React from "react";
import Logo from "../Logo/Logo";
import classes from "./Header.module.css";


const header = (props) => {
    return (

        <header className = {classes.Header}>

        <div onClick = { props.toggle } className = {classes.Hamburger}>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div className = {classes.Logo}>
            <Logo />
        </div>


        </header>

    )
}

export default header;






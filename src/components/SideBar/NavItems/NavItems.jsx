import React from "react";
import NavItem from "./NavItem/NavItem";
import Logo from "../../Logo/Logo";
import classes from "./NavItems.module.css";
import Twitter from "../../../assets/img/twitter.svg";
import Github from "../../../assets/img/github-logo.svg";

const pages =
    [
        'home', 'health', 'business', 'sports', 'technology', 'entertainment'
    ];


const NavItems = (props) => {
    const style = props.isOpen ? [ classes.NavWrapper, classes.Visible ].join(" ") : classes.NavWrapper;
    const toggle = props.toggle;
    return (
        <nav className={style}>

            <div className={classes.SideLogo}>
                <Logo />
                <h1>React News App</h1>
            </div>


            {
                pages.map((page, i) => (
                    <NavItem
                        toggle = {toggle}
                        dest={`/${page}`}
                        key={i}>
                        {page}
                    </NavItem>
                ))
            }

            <div className={classes.Social}>
                <a href="http://" target="_blank" rel="noopener noreferrer">  <img src={Github}  alt="logo of github"/> </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">  <img src={Twitter} alt="logo of twitter" /></a>
                        
              
            </div>

            <p className={classes.Credit} >This site was built using the <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">News API</a> </p>
        </nav>
    )
}

export default NavItems;






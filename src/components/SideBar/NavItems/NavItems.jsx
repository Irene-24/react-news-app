import React from "react";
import NavItem from "./NavItem/NavItem";
import Logo from "../../Logo/Logo";
import classes from "./NavItems.module.css";
import Twitter from "../../../assets/img/twitter.svg";
import Github from "../../../assets/img/github-logo.svg";

const pages =
    [
        'home', 'health', 'finance', 'sports', 'technology', 'entertainment'
    ];


const NavItems = (props) => {
    const style = props.isOpen ? [ classes.NavWrapper, classes.Visible ].join(" ") : classes.NavWrapper;
    return (
        <nav className={style}>

            <div className={classes.SideLogo}>
                <Logo />
                <h1>React News App</h1>
            </div>


            {
                pages.map((page, i) => (
                    <NavItem
                        dest={`/${page}`}
                        key={i}>
                        {page}
                    </NavItem>
                ))
            }

            <div className={classes.Social}>
                <img src={Github}  alt="logo of github"/>           
                <img src={Twitter} alt="logo of twitter" />
            </div>

            <p className={classes.Credit} >This site was built using the <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">News API</a> </p>
        </nav>
    )
}

export default NavItems;






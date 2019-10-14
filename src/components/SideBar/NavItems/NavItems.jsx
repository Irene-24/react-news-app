import React from "react";
import NavItem from "./NavItem/NavItem";
import Logo from "../../Logo/Logo";
import classes from "./NavItems.module.css";

const pages = 
[
    'home','health','finance','sports','technology','entertainment'
];


const NavItems = (props) =>
{
    return(
        <div className = {classes.NavWrapper}>
        <Logo />
        <h2>The Announcer</h2>
        {
            pages.map( ( page,i ) => (
                        <NavItem 
                            dest={`/${page}`}
                            key={i}> 
                            {page} 
                        </NavItem> 
                    ))
        }
        </div>
    )
}

export default NavItems;






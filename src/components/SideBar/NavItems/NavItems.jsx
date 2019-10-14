import React from "react";
import NavItem from "./NavItem/NavItem";
import classes from "./NavItems.module.css";

const pages = 
[
    'home','health','finance','sports','technology','entertainment'
];


const NavItems = (props) =>
{
    return(
        <div className = {classes.NavWrapper}>

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






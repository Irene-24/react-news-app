import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavItem.module.css";

const NavItem = (props) => {
   
    return (
        <div onClick = {props.toggle} className={classes.NavItem}>
            <NavLink
                to={ props.dest  }
                exact={props.exact}
                activeClassName={classes.Active}>
                {props.children}
            </NavLink>
        </div>
    )
}

export default NavItem;



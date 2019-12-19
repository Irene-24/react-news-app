import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./CarouselItem.module.css";
import placeholder from "../../../assets/img/logo light.svg";

import { capitalizeFirst } from "../../../assets/utils";

const carouselItem = (props) =>
{
   let image =null ;
   let alt = null;

   if( props.image )
   {
       image =  props.image;
       alt ="news headline pic";
       
   }
   else
   {
       image = placeholder;
       alt ="loudspeaker placeholder pic";
   }

   return <div className={classes.Slide}>

    <NavLink
                    to={ props.dest  }
                    target="_blank"
                    className={classes.Slide_Header}>
                    {capitalizeFirst(props.text)} &nbsp;&nbsp; <i className="fas fa-external-link-alt"></i>
    </NavLink>    
   {/* <p className={classes.Slide_Header}>
      {capitalizeFirst(props.text)}
   </p> */}
   <img src={image} alt={alt}/>  
   </div>;
};

export default carouselItem;
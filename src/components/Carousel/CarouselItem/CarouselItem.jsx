import React from "react";
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

   const style = alt === "loudspeaker placeholder pic" ? classes.PlaceHolder : null ;

   return <div className={classes.Slide}>

    <a rel="noopener noreferrer"
                    href={ props.dest  }
                    target="_blank"
                    className={classes.Slide_Header}>
                    {capitalizeFirst(props.text)} &nbsp;&nbsp; <i className="fas fa-external-link-alt"></i>
    </a>    
  
   <img className={style} src={image} alt={alt}/>  
   </div>;
};

export default carouselItem;
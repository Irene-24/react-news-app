import React from "react";
import classes from "./CarouselItem.module.css";
import placeholder from "../../../assets/img/logo light.svg";

const carouselItem = (props) =>
{
   let image =null ;

   if( props.image !== "" )
   {
       image =  props.image;
       alt ="news headline pic"
   }
   else
   {
       image = placeholder;
       alt ="loudspeaker placeholder pic";
   }

   return <div className={classes.Slide}>
   <div className={classes.Slide_Header}>
      {props.text}
   </div>
   <img src={image} alt="news article pic"/>  
   </div>;
};

export default carouselItem;
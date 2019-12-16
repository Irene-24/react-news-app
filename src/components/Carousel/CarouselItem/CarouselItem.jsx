import React from "react";

const carouselItem = (props) =>
{
   return <div>
   <h1> {props.title} </h1>
   <img src={props.image} />  
   </div>;
};

export default carouselItem;
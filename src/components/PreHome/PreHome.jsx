import React from "react";
import classes from "./PreHome.module.css";
import Carousel from "../Carousel/Carousel";
import ConvCurrency from "../../containers/ConvCurrency";

const preHome = props => {

  return (
    <div className={classes.Container}>
      
      <div className={classes.Carousel}>      
    
         <Carousel articles={props.articles} />

     
      </div>

       <div className={classes.Currency_Conv}>     
       
        <ConvCurrency />
      </div>
      
    </div>
  );
};

export default preHome;

import React from "react";
import DummyCard from "./DummyCard/DummyCard";
import classes from "./LoadingPage.module.css";

const LoadingPage = () => {
    const cards = [];

    for (let i = 0; i < 20 ; i++) 
    {
        cards.push( <DummyCard key={i} /> ) ;       
    }
    
    return (
        <div className={classes.Grid}>

            {cards}

        </div>
    )
}

export default LoadingPage;



import React from "react";
import classes from "./Retry.module.css";

const retry = props => 
{
    return (
<div className={classes.Retry}>
    <p >There were was error retrieving the articles. Click the button to retry</p>

        
    <button onClick={props.reload}>Retry</button>
</div>
    

    );
};

export default retry;

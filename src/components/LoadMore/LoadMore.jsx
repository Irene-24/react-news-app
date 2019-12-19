import React from "react";
import Retry from "../Retry/Retry";
import classes from "./LoadMore.module.css";


const loadMore = props =>
{
    
    const style = props.full ? classes.Hidden : classes.Text ;


return !props.error ?  <p className={style} >Fetching more articles...</p> : <Retry reload={props.reload} />;

};

export default loadMore;
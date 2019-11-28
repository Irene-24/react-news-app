import React from "react";
import classes from "./LoadMore.module.css";

const loadMore = props =>
{
    
    const style = props.full ? classes.Hidden : classes.Text ;

return <p className={style} >Fetching more articles...</p>

};

export default loadMore;
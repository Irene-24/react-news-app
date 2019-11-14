import React, { Component } from 'react';
import classes from "./SearchBar.module.css";

class Search extends Component
{


    render()
    {
        return (
            <div className={classes.Search}>
               <input type="text" placeholder="Search keyword here..."/>
            </div>
        );
    }

}

export default Search
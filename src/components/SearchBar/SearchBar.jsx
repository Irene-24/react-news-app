import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import classes from "./SearchBar.module.css";

class Search extends Component
{
    state = 
    {
        keyword:""
    }

    
  search = (event) =>
  {
     const keyword = event.target.value.trim();
     console.log(keyword);
     
  }

  saveTyped = (event) =>
  {
     
        this.setState( { keyword : event.target.value  } );
  }

  search = (event) =>
  {
    if(event.keyCode === 13)
    {     
      
      //call a function in app.js to handle the actual redirect
      //that function will do the actual fetching of data
      this.props.search(this.state.keyword);
      //set this in redux, use in newspage to display

      this.props.history.push('/search');
    }
  }


    render()
    {
        return (
            <div className={classes.Search}>
               <input type="text"  value={this.state.keyword} placeholder="Search keyword here..." onChange={this.saveTyped} onKeyUp={this.search} />
            </div>
        );
    }

}

export default withRouter(Search);
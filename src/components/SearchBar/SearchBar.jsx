import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actionCreators";
import searchIcon from "../../assets/img/magnifier.svg";
import classes from "./SearchBar.module.css";

class Search extends Component {
  state = {
    keyword: ""
  };

  inputHandler = event => {
    event.preventDefault();
    this.setState({ keyword: event.target.value });
  };

  search = event => {
    event.preventDefault();
    if (event.keyCode === 13) {
      this.lookup();
    }
  };

  lookup = () => {
    if (this.state.keyword !== "") 
    {
      this.props.setKeyword(this.state.keyword); 

      if (this.props.location.pathname === '/search') 
      {
        this.props.history.replace(`/`);
        setTimeout(() => 
        {
          this.props.history.push("/search");
        });
      }       
      else 
      {
        this.props.history.push("/search");
      }


    }
  };

  render() {
    return (
      <div  className={classes.Search}>
        <img onClick={this.lookup} className={classes.Icon} src={searchIcon} alt="magnifier icon" />
        <input
          type="text"
          value={this.state.keyword}
          placeholder="Search keyword here..."
          onChange={this.inputHandler}
          onKeyUp={this.search}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setKeyword : (keyword) =>
      dispatch(actionCreators.setKeyword(keyword) )
  };
};



export default connect(null,mapDispatchToProps)(withRouter(Search));

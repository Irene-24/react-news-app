import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import searchIcon from "../../assets/img/magnifier.svg";
import classes from "./SearchBar.module.css";

class Search extends Component {
  state = {
    keyword: ""
  };

  inputHandler = event => {
    event.preventDefault();
    this.setState({ keyword: event.target.value.trim() });
  };

  search = event => {
    event.preventDefault();
    if (event.keyCode === 13) {
      this.lookup();
    }
  };

  lookup = () => {
    if (this.state.keyword !== "") {
      this.props.search(this.state.keyword);
      this.props.history.push("/search");
    }
  };

  render() {
    return (
      <div className={classes.Search}>
        <img className={classes.Icon} src={searchIcon} alt="magnifier icon" />
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

export default withRouter(Search);

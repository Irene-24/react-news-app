import React, { Component } from "react";
import Header from "../Header/Header";
import NavItems from "./NavItems/NavItems";

class Sidebar extends Component {
  state = {
    isSideBarVisible: false
  };

  toggleSideBarVisibility = () => {
    const isVisibile = this.state.isSideBarVisible;
    if (isVisibile) {
      this.setState({ isSideBarVisible: false });
    } else {
      this.setState({ isSideBarVisible: true });
    }
  };

  render() {
    return (
      <>
        <Header toggle={this.toggleSideBarVisibility} />
        <NavItems
          toggle={this.toggleSideBarVisibility}
          isOpen={this.state.isSideBarVisible}
        />
      </>
    );
  }
}

export default Sidebar;

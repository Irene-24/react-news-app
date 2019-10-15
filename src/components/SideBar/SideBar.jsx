import React, { Component } from 'react';
import Wrapper from "../../hoc/Wrapper";
import Header from "../Header/Header";
import NavItems from "./NavItems/NavItems";


class Sidebar extends Component {
    state =
        {
            isSideBarVisible: false
        }

    toggleSideBarVisibility = () => {
        const isVisibile = this.state.isSideBarVisible;
        if (isVisibile) {
            this.setState({ isSideBarVisible: false });
        }
        else {
            this.setState({ isSideBarVisible: true });
        }
    }

    render() {

        return (
            <Wrapper>
                <Header toggle = { this.toggleSideBarVisibility } />
                <NavItems isOpen = { this.state.isSideBarVisible } />
            </Wrapper>

        );

    }
}


export default Sidebar;

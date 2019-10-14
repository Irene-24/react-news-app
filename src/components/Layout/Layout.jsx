import React, { Component } from "react";
import NavItems from "../SideBar/NavItems/NavItems";

class Layout extends Component 
{
    constructor(props)
    {
      super(props);
      this.state =
      {
       showSideDrawer:false,
      }
    }

    componentDidMount ()
    {

    }

    render()
    { 
        return(
              

            <div> 
                <NavItems /> 
                {this.props.children} 
            </div>

                
            )
    }
}

    ;


export default Layout;



import React, { Component } from "react";
import Sidebar from "../SideBar/SideBar";

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
              

            <> 
                <Sidebar/> 
                {this.props.children} 
            
            </>

                
            )
    }
}

    ;


export default Layout;



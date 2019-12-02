import React from "react";
import Sidebar from "../SideBar/SideBar";

const layout = props => {
  return (
    <>
      <Sidebar />
      {props.children}
    </>
  );
};

export default layout;

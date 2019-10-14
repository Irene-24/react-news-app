import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";


class App extends Component 
{
 

  render()
  {
    
    let routes = 
    (
      <Switch>
      
        <Route path="/home" render = { () => <h1 style={ {textAlign:"center",position:"absolute",top:"0",right:"30px"}}>HOME</h1> } />
        <Route path="/health" render = { () => <h1 style={ {textAlign:"center",position:"absolute",top:"0",right:"30px"}}>HEALTH</h1> } />
        <Route path="/finance" render = { () => <h1 style={ {textAlign:"center",position:"absolute",top:"0",right:"30px"}}>FINANCE</h1> } />
        <Route path="/sports" render = { () => <h1 style={ {textAlign:"center",position:"absolute",top:"0",right:"30px"}}>SPORTS</h1> } />
        <Route path="/technology" render = { () => <h1 style={ {textAlign:"center",position:"absolute",top:"0",right:"30px"}}>TECHNOLOGY</h1> } />
        <Route path="/entertainment" render = { () => <h1 style={ {textAlign:"center",position:"absolute",top:"0",right:"30px"}}>ENTERTAINMENT</h1> } />
        <Redirect to ="/home" />
      </Switch>
    );

    return (
      <Layout>
       { routes }
      </Layout>
    );

  }
}  


export default App;

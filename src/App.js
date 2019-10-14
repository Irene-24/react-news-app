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
      
        <Route path="/home" render = { () => <h1 style={ {textAlign:"center"}}>HOME</h1> } />
        <Route path="/health" render = { () => <h1 style={ {textAlign:"center"}}>HEALTH</h1> } />
        <Route path="/finance" render = { () => <h1 style={ {textAlign:"center"}}>FINANCE</h1> } />
        <Route path="/sports" render = { () => <h1 style={ {textAlign:"center"}}>SPORTS</h1> } />
        <Route path="/technology" render = { () => <h1 style={ {textAlign:"center"}}>TECHNOLOGY</h1> } />
        <Route path="/entertainment" render = { () => <h1 style={ {textAlign:"center"}}>ENTERTAINMENT</h1> } />
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

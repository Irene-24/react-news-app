import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoadingPage from "./components/LoadingPage/LoadingPage";


class App extends Component 
{
 

  render()
  {
    
    let routes = 
    (
      <Switch>
      
        <Route path="/home" />
        <Route path="/health" />
        <Route path="/finance" />
        <Route path="/sports" />
        <Route path="/technology" /> 
        <Route path="/entertainment" /> 
        <Redirect to ="/home" />

      </Switch>
    );

    return (
      <Layout>
       { routes }
       <LoadingPage />
      </Layout>
    );

  }
}  


export default App;

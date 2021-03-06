import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import asyncComponent from "./hoc/asyncComponent";
import Layout from "./components/Layout/Layout";
import SearchBar from "./components/SearchBar/SearchBar";
import Home from "./containers/Home";




const asyncSports = asyncComponent( () => import('./containers/Sports') );
const asyncHealth = asyncComponent( () => import('./containers/Health') );
const asyncTechnology = asyncComponent( () => import("./containers/Technology") );
const asyncBusiness = asyncComponent( () => import('./containers/Business') );
const asyncEntertainment = asyncComponent( () => import("./containers/Entertainment") );
const asyncSearchPage = asyncComponent( () => import("./containers/SearchPage") );



class App extends Component 
{

  render()
  {
    
    let routes = 
    (
      <Switch>
      
        <Route path="/home" component={Home}/>
        <Route path="/health" component={asyncHealth} />
        <Route path="/business" component={asyncBusiness} />
        <Route path="/sports" component={asyncSports} />
        <Route path="/technology" component={asyncTechnology} /> 
        <Route path="/entertainment" component={asyncEntertainment} />
        <Route path="/search" component={asyncSearchPage} /> 
        <Redirect to ="/home" />

      </Switch>
    );

    let view = (
      <Layout>
         { routes }
         <SearchBar  />         
        </Layout>
    );

 

    return view;
  }
}  

export default App;
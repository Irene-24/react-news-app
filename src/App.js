import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Sports from "./containers/Sports";
import SearchPage from "./containers/SearchPage";
import Layout from "./components/Layout/Layout";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import SearchBar from "./components/SearchBar/SearchBar";


class App extends Component 
{

  state = 
  {
    loading:false,
  }

  // Testing Out
  // componentDidMount()
  // {
  //   fetch('./dummyData.json')
  //   .then( resp => resp.json() )
  //   .then( resp => console.log(resp) )
  //   .catch( err => console.log(err) )
  // }

  searchHandler= (keyword) =>
  {
     console.log(keyword);
     
  }
 

  render()
  {
    
    let routes = 
    (
      <Switch>
      
        <Route path="/home" component={Sports}/>
        <Route path="/health" component={Sports} />
        <Route path="/finance" component={Sports} />
        <Route path="/sports" component={Sports} />
        <Route path="/technology" component={Sports} /> 
        <Route path="/entertainment" component={Sports} />
        <Route path="/search" component={SearchPage} /> 
        <Redirect to ="/home" />

      </Switch>
    );

    let view = (
      <Layout>
       <SearchBar search={this.searchHandler} />
       <LoadingPage />
      </Layout>
    );;

    if(!this.state.loading)
    {view =
      (
        <Layout>
         { routes }
         <SearchBar search={this.searchHandler} />         
        </Layout>
      );
    }

    return view;
  }
}  


export default App;

import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchPage from "./containers/SearchPage";
import NewsPage from './components/NewsPage/NewsPage';


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

 

  render()
  {
    
    let routes = 
    (
      <Switch>
      
        <Route path="/home" component={NewsPage}/>
        <Route path="/health" component={NewsPage} />
        <Route path="/finance" component={NewsPage} />
        <Route path="/sports" component={NewsPage} />
        <Route path="/technology" component={NewsPage} /> 
        <Route path="/entertainment" component={NewsPage} />
        <Route path="/search" component={SearchPage} /> 
        <Redirect to ="/home" />

      </Switch>
    );

    let view = (
      <Layout>
       { routes }
       <SearchBar />
       <LoadingPage />
      </Layout>
    );;

    if(!this.state.loading)
    {view =
      (
        <Layout>
         { routes }
         <SearchBar />         
        </Layout>
      );
    }

    return view;
  }
}  


export default App;

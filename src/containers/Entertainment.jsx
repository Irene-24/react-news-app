import React, { Component } from 'react';
import { connect } from "react-redux";
import NewsPage from "../components/NewsPage/NewsPage";
import LoadingPage from "../components/LoadingPage/LoadingPage";
import * as actionCreators from "../store/actions/actionCreators";

class Entertainment extends Component
{
    state =
    {
        category:"entertainment"
    }

    componentDidMount()
    {
        this.props.fetchArticles(this.state.category,this.props.page);  
    }
    
 
    render()
    {
       const view = this.props.loading ? <LoadingPage /> : <NewsPage title={this.state.category} articles={this.props.articles}/>;
       return view;
    }


}

const mapDispatchToProps = dispatch =>
{ 
    return {
        fetchArticles: (category,page) => dispatch( actionCreators.fetchArticles(category,page) ) 
  };
};

const mapStateToProps = state =>
{
    return {
        articles:state.articles.entertainment.list,
        loading:state.articles.loading,
        page:state.articles.entertainment.currPage
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Entertainment);
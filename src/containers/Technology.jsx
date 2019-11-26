import React, { Component } from 'react';
import { connect } from "react-redux";
import NewsPage from "../components/NewsPage/NewsPage";
import LoadingPage from "../components/LoadingPage/LoadingPage";
import * as actionCreators from "../store/actions/actionCreators";

class Technology extends Component
{
    state =
    {
        category:"technology",
        page:1
    }

    componentDidMount()
    {
        this.props.fetchArticles(this.state.category,this.state.page);  
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
        articles:state.articles.technology,
        loading:state.articles.loading
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Technology);
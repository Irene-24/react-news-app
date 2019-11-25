import React, { Component } from 'react';
import { connect } from "react-redux";
import NewsPage from "../components/NewsPage/NewsPage";
import LoadingPage from "../components/LoadingPage/LoadingPage";
import * as actionCreators from "../store/actions/actionCreators";



class Home extends Component
{
    state =
    {
        category:"general",
        page:1
    }

    componentDidMount()
    {
        this.props.fetchArticles(this.state.category,this.state.page);  
    }
    
    render()
    {
        const view = this.props.loading ? <LoadingPage /> :  <NewsPage title="Top" articles={this.props.articles} isHome />;
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
        articles:state.articles.general,
        loading:state.articles.loading
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
import React, { Component } from 'react';
import { connect } from "react-redux";
import NewsPage from "../components/NewsPage/NewsPage";
import LoadingPage from "../components/LoadingPage/LoadingPage";
import LoadMore from "../components/LoadMore/LoadMore";
import PreHome from "../components/PreHome/PreHome";
import * as actionCreators from "../store/actions/actionCreators";

class Home extends Component
{
    constructor(props)
    {
      super(props);
      this.myRef = React.createRef();
      this.state = {
          category:"general"
      };
    }

    componentDidMount()
    {
      window.scrollTo(0,0);
        this.props.fetchArticles(this.state.category,this.props.page);
        
        const options = 
        {
            root: null, 
            rootMargin: '0px',
            threshold: 0.7
        };
    
       
          this.observer = new IntersectionObserver( this.handleObserver, options );
          
          this.observer.observe(this.myRef.current); 
    }

    componentWillUnmount()
    {
      this.observer.disconnect();  
    }

     
    handleObserver = entities =>
    {
        if(this.props.articles.length > 0)
        {
            if(entities[0].intersectionRatio >=0.7 && (this.props.page <= this.props.maxPageCount))
            {
            this.props.fetchArticles(this.state.category, this.props.page, true );
            }
            
        }
    }
 
    render() {
        const view = this.props.loading ? (
          <LoadingPage />
        ) : (
          <>
          <PreHome articles={this.props.articles.slice(2,8)} /> 
          <NewsPage isHome title="Top" articles={this.props.articles} />
          </>
        );
    
        return (
          <>  

              
            {view} 
           <div style={{height:"100px"}} ref={this.myRef}>
             <LoadMore full = {this.props.page > this.props.maxPageCount}  />
           </div>
          </>
        );
      }
    }

const mapDispatchToProps = dispatch => 
{
    return {
      fetchArticles: (category, page,alreadyLoaded=false) =>
        dispatch(actionCreators.fetchArticles(category, page,alreadyLoaded))
    };
};

const mapStateToProps = state =>
{
    return {
        articles:state.articles.general.list,
        loading:state.articles.loading,
        page:state.articles.general.currPage,
        maxPageCount:state.articles.general.maxPageCount
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
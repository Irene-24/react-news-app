import React, { Component } from "react";
import { connect } from "react-redux";
import NewsPage from "../components/NewsPage/NewsPage";
import LoadingPage from "../components/LoadingPage/LoadingPage";
import LoadMore from "../components/LoadMore/LoadMore";
import * as actionCreators from "../store/actions/actionCreators";

class Entertainment extends Component
{
    constructor(props)
    {
      super(props);
      this.myRef = React.createRef();
      this.state =
      {
          category:"entertainment"
      };
    }
    componentDidMount() 
    {
      this.props.fetchArticles(this.state.category, this.props.page);
  
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
  
   
    handleObserver = (entities, options) =>
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
        <NewsPage title={this.state.category} articles={this.props.articles} />
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

const mapDispatchToProps = dispatch => {
    return {
      fetchArticles: (category, page,alreadyLoaded=false) =>
        dispatch(actionCreators.fetchArticles(category, page,alreadyLoaded))
    };
  };
  
  const mapStateToProps = state => {
    return {
      articles: state.articles.entertainment.list,
      loading: state.articles.loading,
      page: state.articles.entertainment.currPage,
      maxPageCount:state.articles.entertainment.maxPageCount
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(Entertainment);
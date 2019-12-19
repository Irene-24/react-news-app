import React, { Component } from "react";
import { connect } from "react-redux";
import NewsPage from "../components/NewsPage/NewsPage";
import LoadingPage from "../components/LoadingPage/LoadingPage";
import LoadMore from "../components/LoadMore/LoadMore";
import * as actionCreators from "../store/actions/actionCreators";

class Technology extends Component {

  constructor(props)
  {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      category: "technology"
    };
  }

  retry = () =>
  {    
    this.props.fetchArticles(this.state.category,this.props.page);
  }
  

  componentDidMount() 
  {
    window.scrollTo(0,0);
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

    const view = <NewsPage title={this.state.category} articles={this.props.articles} />;

     const total_view = this.props.loading ? ( this.props.articles.length > 0 ? view :
       <LoadingPage />
     ) :view ;
 
     return (
       <>                
         {total_view} 
        <div style={{height:"100px"}} ref={this.myRef}>
          <LoadMore reload={this.retry} error={this.props.error} full={this.props.page > this.props.maxPageCount} />
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
    articles: state.articles.technology.list,
    loading: state.articles.loading,
    page: state.articles.technology.currPage,error:state.articles.error,
    maxPageCount:state.articles.technology.maxPageCount
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Technology);

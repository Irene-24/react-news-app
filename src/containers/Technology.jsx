import React, { Component } from "react";
import { connect } from "react-redux";
import NewsPage from "../components/NewsPage/NewsPage";
import LoadingPage from "../components/LoadingPage/LoadingPage";
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
  

  componentDidMount() 
  {
    this.props.fetchArticles(this.state.category, this.props.page);
    const options = 
    {
        root: null, 
        rootMargin: '0px',
        threshold: 1
    };

   
      this.observer = new IntersectionObserver( this.handleObserver, options );
      //Observe the `loadingRef`

      const node = this.myRef.current; 
      this.observer.observe(node); 

      //console.log('mounted');
         
    
  }

  

  componentWillUnmount()
  {
    this.observer.disconnect();  
  }

 
  handleObserver = (entities, options) =>
  {
    if(this.props.articles.length > 0)
    {
        this.props.fetchArticles(this.state.category, this.props.page, true );
        console.log(entities);
        console.log(options);
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
       <div ref={this.myRef}></div>
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
    page: state.articles.technology.currPage
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Technology);

import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NewsPage from "../components/NewsPage/NewsPage";
import LoadingPage from "../components/LoadingPage/LoadingPage";
import LoadMore from "../components/LoadMore/LoadMore";
import * as actionCreators from "../store/actions/actionCreators";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() 
  {
      window.scrollTo(0,0);
    
      if(this.props.keyword === "")
      {
          this.props.history.push('/home');
      }
      else
      {
          this.props.searchKeyword(this.props.keyword);        
      }

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

  retry = () =>
  {    
    this.props.searchKeyword(this.props.keyword)
  }


  handleObserver = (entities, options) =>
  {
    if(this.props.articles.length > 0)
    {
        if(entities[0].intersectionRatio >=0.7 && (this.props.page <= this.props.maxPageCount))
        {
          this.props.searchKeyword(this.props.keyword, this.props.page, true,false );
        }
        
    }
  }

  

  render() {
    const view = this.props.loading ? (
      <LoadingPage />
    ) : (
      <NewsPage
        title={`${this.props.total} results found for`}
        keyword={this.props.keyword} isSearch
        articles={this.props.articles}
      />
    );

    return (
      <>
        {view}
        <div style={{ height: "100px" }} ref={this.myRef}>
          <LoadMore reload={this.retry} error={this.props.error} full={this.props.page > this.props.maxPageCount} />
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchKeyword: (keyword,page=1,alreadyLoaded=false,isNewKeyword=true) => dispatch(actionCreators.searchKeyword(keyword,page,alreadyLoaded,isNewKeyword))
  };
};

const mapStateToProps = state => {
  return {
    keyword: state.search.keyword,
    maxPageCount:state.search.maxPageCount,
    loading: state.search.loading,
    total: state.search.total,
    articles: state.search.list,
    page:state.search.currPage,
    error:state.search.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchPage));

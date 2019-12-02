import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NewsPage from "../components/NewsPage/NewsPage";
import LoadingPage from "../components/LoadingPage/LoadingPage";
//import LoadMore from "../components/LoadMore/LoadMore";
import * as actionCreators from "../store/actions/actionCreators";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() 
  {
    
      if(this.props.keyword === "")
      {
          this.props.history.push('/home');
      }
      else
      {
          this.props.searchKeyword(this.props.keyword);        
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
          {/* <LoadMore full={this.props.page > this.props.maxPageCount} /> */}
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchKeyword: keyword => dispatch(actionCreators.searchKeyword(keyword))
  };
};

const mapStateToProps = state => {
  return {
    keyword: state.search.keyword,
    loading: state.search.loading,
    total: state.search.total,
    articles: state.search.list
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchPage));

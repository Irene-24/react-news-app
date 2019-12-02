import * as actionTypes from "./actionTypes";

export const fetchArticlesStart = () => {
  return {
    type: actionTypes.FETCH_ARTICLES_START
  };
};

export const fetchArticlesSuccess = (category,articles,maxPageCount) => 
{

     
  return {
    type: actionTypes.FETCH_ARTICLES_SUCCESS,
    articles,
    category,
    maxPageCount
  };
};

export const fetchArticlesFail = err => {
  return {
    type: actionTypes.FETCH_ARTICLES_FAIL,
    err
  };
};

export const fetchArticles = (category="general", page=1,alreadyLoaded=false) => {
  return dispatch => {

    if(!alreadyLoaded)
    {     
      dispatch(fetchArticlesStart());
    }    
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&page=${page}&country=us`;
   // const url = 'http://localhost:3000/dummyData.json';
    fetch(url, {
      method: "GET",
      headers: 
      {
        "x-api-key": process.env.REACT_APP_API_KEY
      }
    })
      .then(res => 
        {
        if (res.ok && res.status === 200) 
        {
          return res.json();
        } 
        else 
        {
          dispatch(fetchArticlesFail());
        }
      })
      .then( res =>
        {   
            const maxPageCount = Math.ceil(res.totalResults/20)  ;    
            const articles = res.articles;
            dispatch(fetchArticlesSuccess(category,articles,maxPageCount));
        } )
      .catch(err =>
        {
          dispatch(fetchArticlesFail(err))
        } );
  };
};



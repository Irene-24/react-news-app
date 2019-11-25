import * as actionTypes from "./actionTypes";

export const fetchArticlesStart = () => {
  return {
    type: actionTypes.FETCH_ARTICLES_START
  };
};

export const fetchArticlesSuccess = (category,articles) => 
{
     
  return {
    type: actionTypes.FETCH_ARTICLES_SUCCESS,
    articles,
    category
  };
};

export const fetchArticlesFail = err => {
  return {
    type: actionTypes.FETCH_ARTICLES_FAIL,
    err
  };
};

export const fetchArticles = (category="general", page=1) => {
  return dispatch => {
    dispatch(fetchArticlesStart());

    //const url = `https://newsapi.org/v2/top-headlines?category=${category}&page=${page}`;
    const url = 'http://localhost:3000/dummyData.json';
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
          console.log(1);
          
          dispatch(fetchArticlesFail());
        }
      })
      .then( res =>
        {
            const articles = res.articles;
            dispatch(fetchArticlesSuccess(category,articles));
        } )
      .catch(err =>
        {
          console.log(2);
          dispatch(fetchArticlesFail(err))
        } );
  };
};

import * as actionTypes from "./actionTypes";

export const searchKeywordSuccess = (articles,total,maxPageCount) =>
{
    //console.log('1234');
    
    return {
        type:actionTypes.SEARCH_KEYWORD_SUCCESS,
        articles,
        total,
        maxPageCount
    }
}

export const searchFreshKeywordSuccess = (articles,total,maxPageCount) =>
{
    //console.log('1234');
    
    return {
        type:actionTypes.SEARCH_FRESH_KEYWORD_SUCCESS,
        articles,
        total,
        maxPageCount
    }
}



export const searchKeywordFail = () =>
{
      
    return {
        type:actionTypes.SEARCH_KEYWORD_FAIL
    }
}


export const searchKeywordStart = () =>
{  
    
    return {
        type:actionTypes.SEARCH_KEYWORD_START
    }
}

export const setKeyword = (keyword) =>
{   
   
    return {
        type:actionTypes.SET_KEYWORD,
        keyword
    }
}


export const searchKeyword = (keyword,page=1,alreadyLoaded=false,isNewKeyword=true) =>
{
    const query = keyword.toString().trim();
    return dispatch =>
    {
        if (query.length > 0) 
        {
            if(!alreadyLoaded)
            {     
               dispatch(searchKeywordStart());
            }  

            const q = encodeURIComponent(query);
            const url = `https://newsapi.org/v2/everything?q=${q}&page=${page}`;

            fetch(url,
                {
                    method: "GET",
                    headers: 
                    {
                        "x-api-key": process.env.REACT_APP_API_KEY
                    }

                })
            .then( res =>
                {
                    if (res.ok && res.status === 200) 
                    {
                      return res.json();
                    } 
                    else 
                    {
                      dispatch(searchKeywordFail());
                    }

                } )   
                .then( res =>
                    {   
                        const maxPageCount = Math.ceil(res.totalResults/20)  ;

                        const articles = res.articles;  
                        const total = res.totalResults;
    
                        //console.log(res);

                        if(isNewKeyword)
                        {
                            dispatch(searchFreshKeywordSuccess(articles,total,maxPageCount));
                        }
                        else
                        {
                            dispatch(searchKeywordSuccess(articles,total,maxPageCount));
                        }

                       
                    } )
                  .catch(err =>
                    {
                      dispatch(searchKeywordFail(err))
                    } );     
        }
    }
}


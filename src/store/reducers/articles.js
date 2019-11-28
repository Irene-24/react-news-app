import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utils";

const initialState =
{
    keyword:"",
    loading:false,
    health: {
        currPage:1,
        maxPageCount:1,
        list:[]
    },
    sports: {
        currPage:1,
        maxPageCount:1,
        list:[]
    },
    entertainment: {
        currPage:1,
        maxPageCount:1,
        list:[]
    },
    technology:
    {
        currPage:1,
        maxPageCount:1,
        list:[]
    },
    business: {
        currPage:1,
        maxPageCount:1,
        list:[]
    },
    general: {
        currPage:1,
        maxPageCount:1,
        list:[]
    },
};

const fetchArticlesSuccess = (category,articles,maxPageCount,state) =>
{
   
    const oldArticles = state[category].list;

    if(state[category].currPage <= state[category].maxPageCount )
    {
        const currPage = state[category].currPage+1;
        const updatedCategory = updateObject( state[category], { currPage, maxPageCount,list:[...oldArticles, ...articles  ] } );  
        state[category] = updatedCategory;


    }


    return updateObject(state,{loading:false});
};

const fetchArticlesStart = (state) =>
{   
    return updateObject(state,{loading:true})
};

const fetchArticlesFail = (state) =>
{
    
    
    return updateObject(state,{loading:false})
};

const reducer = (state = initialState, action) => 
{

    switch (action.type) 
    {
        case actionTypes.FETCH_ARTICLES_START:
                return fetchArticlesStart(state);

        case actionTypes.FETCH_ARTICLES_SUCCESS:
            return fetchArticlesSuccess(action.category,action.articles,action.maxPageCount,state);
        
        case actionTypes.FETCH_ARTICLES_FAIL:
            return fetchArticlesFail(state);
    
        default:
           return state;
    }

}

export default reducer;
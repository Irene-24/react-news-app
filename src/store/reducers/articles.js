import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utils";

const initialState =
{
    keyword:"",
    loading:false,
    health:[],
    sports:[],
    entertainment:[],
    technology:[],
    business:[],
    general:[]
};

const fetchArticlesSuccess = (category,articles,state) =>
{
   
    return updateObject(state,{[category]:[...state[category],...articles],loading:false})
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
            return fetchArticlesSuccess(action.category,action.articles,state);
        
        case actionTypes.FETCH_ARTICLES_FAIL:
            return fetchArticlesFail(state);
    
        default:
           return state;
    }

}

export default reducer;
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utils";

const initialState = 
{
    keyword:"",
    loading:false,
    total:0,
    currPage:1,
    maxPageCount:1,
    list:[]
};

const searchKeywordStart = (state) =>
{   
    return updateObject(state,{loading:true})
};

const setKeyword = (state,keyword) =>
{   
    return updateObject(state,{keyword})
};

const searchKeywordSuccess= (articles,total,maxPageCount,state) =>
{   
    const oldArticles = state.list;

    if(state.currPage <= state.maxPageCount )
    {
      const currPage = state.currPage+1;

      const updatedList = updateObject( state, {currPage,maxPageCount,total,list:[...oldArticles, ...articles  ]} );
      state = updatedList;

    }

    return updateObject(state,{loading:false});
};

const searchKeywordFail = (state) =>
{   
  return updateObject(state,{loading:false});
};


const reducer = (state = initialState, action) => 
{
  switch (action.type) 
  {
      case actionTypes.SET_KEYWORD:
          return setKeyword(state,action.keyword);

      case actionTypes.SEARCH_KEYWORD_START:
          return searchKeywordStart(state);
  
      case actionTypes.SEARCH_KEYWORD_SUCCESS:
           return searchKeywordSuccess(action.articles,action.total,action.maxPageCount,state);

      case actionTypes.SEARCH_KEYWORD_FAIL:
          return searchKeywordFail(state);    

      default:
          return state;
  }
}

export default reducer;
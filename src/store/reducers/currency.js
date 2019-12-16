import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utils";

const initialState =
{
    loading:false,
    target:'NGN',
    source:'USD',
    to_value:0.00,
    from_value:0.00
};


const fetchConvertedSuccess = (state,converted) =>
{
    const to_value = (coverted * state.from_value).toFixed(2);

};

const reducer = (state = initialState, action) => 
{
  
    switch(action.type)
    {
        case actionTypes.START_CONVERSION:
            return 6;
        
        case actionTypes.CONVERSION_SUCCESS:
            return 6;

        case actionTypes.CONVERSION_FAIL:
            return 6;    
    }
    
};

export default reducer;

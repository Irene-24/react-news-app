import * as actionTypes from "./actionTypes";

export const fetchArticlesStart = () =>
{
    return {
        type:actionTypes.FETCH_ARTICLES_START
    }
}

export const fetchArticles = (category) =>
{
    return dispatch  => 
    {
        dispatch(fetchArticlesStart());

        const query = `?auth=${token}&orderBy="localId"&equalTo="${localId}"`;
        axios.get(`/orders.json${query}`)
        .then( resp => 
            {
                if(resp.data)
                {
                    const data = Object.entries(resp.data).reverse();
                    dispatch(retrieveOrdersSuccess(data));
                }
                else
                {
                    dispatch(retrieveOrdersFail());
                }
            })
        .catch(err => dispatch(retrieveOrdersFail(err)));

       

    }
}

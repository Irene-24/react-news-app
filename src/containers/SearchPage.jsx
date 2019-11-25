import React, { Component } from 'react';
import NewsPage from "../components/NewsPage/NewsPage";

class SearchPage extends Component
{
    state = 
    {
        count: 5,
        keyword:"meat",
        articles : 
        [
            {
                title: "SpaceX successfully completes Crew Dragon engine tests without an explosion - Engadget",
                url: '/',
                urlToImage:'/',
                src:'The Daily Bugle',
                publishedAt:"2019-11-13T07:40:00Z"
            },
            {
                title: "Chinese state media issues dire warning as Hong Kong protests take dark turn - CNN",
                url: '/',
                urlToImage:'/',
                src:'CNN',
                publishedAt:"2019-11-11T07:40:00Z"
            },
            
            {
                title: "SpaceX successfully completes Crew Dragon engine tests without an explosion - Engadget",
                url: '/',
                urlToImage:'/',
                src:'The Daily Bugle',
                publishedAt:"2019-11-12T07:40:00Z"
            },
            {
                title: "Chinese state media issues dire warning as Hong Kong protests take dark turn - CNN",
                url: '/',
                urlToImage:'/',
                src:'CNN',
                publishedAt:"2019-11-14T07:40:00Z"
            }
        ]
    }
    //x =  number of results
    //meat will be eplaced by query/keyword set in redux store

    render()
    {
        return (
            <>
               
                <NewsPage title={`${this.state.count} results found for`} keyword ={ this.state.keyword }articles={this.state.articles} />
             
            </>
        );
    }

}

export default SearchPage;
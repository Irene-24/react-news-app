import React, { Component } from 'react';
import NewsPage from "../components/NewsPage/NewsPage";

class Home extends Component
{
    //wil remove and use redux when i set it up
    state = 
    {
        articles : 
        [
            {
                title: "SpaceX successfully completes Crew Dragon engine tests without an explosion - Engadget",
                url: '/',
                urlToImage:'/',
                src:'The Daily Bugle',
                publishedAt:"2019-11-03T07:40:00Z"
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
    render()
    {
        return (
          
                <NewsPage title="Top" articles={this.state.articles} isHome />
        );
    }

}

export default Home;
import React, { Component } from 'react';
import NewsPage from "../components/NewsPage/NewsPage";

class Sports extends Component
{
    //wil remove and use redux when i set it up
    state = 
    {
        articles : 
        [
            {
                title: "SpaceX successfully completes Crew Dragon engine tests without an explosion - Engadget",
                url: '/',
                urlToImage: "https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5dc0d32bca425400079c6fd7%2F960x0.jpg",
                src:'The Daily Bugle',
                publishedAt:"2019-11-03T07:40:00Z"
            },
            {
                title: "Chinese state media issues dire warning as Hong Kong protests take dark turn - CNN",
                url: '/',
                urlToImage: "https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5dc0d32bca425400079c6fd7%2F960x0.jpg",
                src:'CNN',
                publishedAt:"2019-11-11T07:40:00Z"
            },
            
            {
                title: "SpaceX successfully completes Crew Dragon engine tests without an explosion - Engadget",
                url: '/',
                urlToImage: "https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5dc0d32bca425400079c6fd7%2F960x0.jpg",
                src:'The Daily Bugle',
                publishedAt:"2019-11-12T07:40:00Z"
            },
            {
                title: "Chinese state media issues dire warning as Hong Kong protests take dark turn - CNN",
                url: '/',
                urlToImage: "https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5dc0d32bca425400079c6fd7%2F960x0.jpg",
                src:'CNN',
                publishedAt:"2019-11-14T07:40:00Z"
            }
        ]
        
        
    }
    render()
    {
        return (
          
                <NewsPage title="Sports" articles={this.state.articles} />
        );
    }

}

export default Sports;
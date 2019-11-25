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
                urlToImage: "https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5dc0d32bca425400079c6fd7%2F960x0.jpg",
                src:'The Daily Bugle',
                publishedAt:"2019-11-03T07:40:00Z"
            },
            {
                title: "Chinese state media issues dire warning as Hong Kong protests take dark turn - CNN",
                url: '/',
                urlToImage: "https://image.cnbcfm.com/api/v1/image/106196083-1571759978719gettyimages-905611490.jpeg?v=1574685344",
                src:'CNN',
                publishedAt:"2019-11-11T07:40:00Z"
            },
            
            {
                title: "SpaceX successfully completes Crew Dragon engine tests without an explosion - Engadget",
                url: '/',
                urlToImage: "https://cdn.vox-cdn.com/thumbor/-P9u4RMiocRD4euj2TO4Bo67lw4=/319x671:2177x1644/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19406354/1183883122.jpg.jpg",
                src:'The Daily Bugle',
                publishedAt:"2019-11-12T07:40:00Z"
            },
            {
                title: "Chinese state media issues dire warning as Hong Kong protests take dark turn - CNN",
                url: '/',
                urlToImage:  "https://techcrunch.com/wp-content/uploads/2017/09/gettyimages-502235562.jpg?w=600",
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
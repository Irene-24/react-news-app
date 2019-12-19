import React from "react";
import Slider from "react-slick";
import CarouselItem from "./CarouselItem/CarouselItem";
import classes from "./Carousel.module.css";

const simpleSlider = props =>  
{

    const settings = 
    {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };

    const view = props.articles.length > 0 ? 
    props.articles.map( (article,i) => <CarouselItem key={i} image={article.urlToImage} dest={article.url} text={article.title} /> ) : null;

    
    return (
        <div className={classes.Adjusted_Slider}><Slider {...settings}>
        {view}
        </Slider></div>
      
    );
}


export default simpleSlider;
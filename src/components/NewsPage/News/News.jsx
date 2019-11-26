import React  from 'react';
import {formatDate,stripSrc} from '../../../assets/utils';
import classes from "./News.module.css";
import placeholder from "../../../assets/img/logo light.svg";



const news = (props) =>
{
    let image =null ;

    let alt= null;

    if( props.news.urlToImage && props.news.urlToImage !== "" )
    {
        image =  props.news.urlToImage;
        alt ="news headline pic"
    }
    else
    {
        image = placeholder;
        alt ="loudspeaker placeholder pic";
    }


    return (
        <div className={classes.NewsCard}>
            <div className={classes.ImgDiv}>
                <img src={ image } alt={alt}/>
            </div>
            <div className={classes.NewsBody}>
                <div className={classes.Tags}>
                <span className={classes.Publisher}>
                    {props.news.source.name}
                </span>
                <span className={classes.Date}>
                    { formatDate(props.news.publishedAt)}
                </span>
                </div>
                
                <p className={classes.Title}>{stripSrc(props.news.title)}</p>
                <a rel="noopener noreferrer" target="_blank" href={props.news.url} className={classes.ReadMore}>Read More &nbsp;&nbsp; <i className="fas fa-external-link-alt"></i> </a>
            </div>
        </div>
    )
}

export default news;


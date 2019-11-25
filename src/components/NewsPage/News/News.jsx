import React  from 'react';
import {formatDate,stripSrc} from '../../../assets/utils';
import classes from "./News.module.css";

const news = (props) =>
{
    return (
        <div className={classes.NewsCard}>
            <div className={classes.ImgDiv}>
                <img src={props.news.urlToImage} alt="news headline pic"/>
            </div>
            <div className={classes.NewsBody}>
                <div className="Tags">
                <span className={classes.Publisher}>
                    {props.news.src}
                </span>
                <span className={classes.Date}>
                    { formatDate(props.news.publishedAt)}
                </span>
                </div>
                
                <p className={classes.Title}>{stripSrc(props.news.title)}</p>
                <a href={props.news.url} className={classes.ReadMore}>Read More</a>
            </div>
        </div>
    )
}

export default news;


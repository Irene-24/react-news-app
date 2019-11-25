import React  from "react";
import News from "./News/News";
import classes from "./NewsPage.module.css";

const newsPage = (props) =>
{
  const header = props.keyword ? <h1 className={classes.Title}>{props.title} <i className={classes.Keyword}>"{props.keyword}"</i> </h1> : <h1 className={classes.Title}>{props.title} News</h1>
  const articles = props.articles.length > 0 ? [...props.articles].map( (article,i) => <News key={i} news={article} /> ) : null;
  return (
    <>
     {header}
     <div className={classes.Grid}>
        {         
          articles
        }
       </div>
  

    </>
 );
}

//will reace the articles from container with the url in it
//props to recive is each news artice object


export default newsPage;

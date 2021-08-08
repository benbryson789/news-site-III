import React from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'
const ArticleList = ({
  articles,
  handleTitleClick
}) => {
    return (
      <>
            {articles.map((obj,index)=>(
          <ArticleTeaser 
          key={index}
            id={index} 
            title = {obj.title}
            created_date = {obj.created_date}
            handleTitleClick = {handleTitleClick}
            />
      ))}
    
      </>
    );

}

export default ArticleList;

import React, { useState,useEffect } from 'react';
import Article from '../components/Article/Article.js'
import { API_URL } from '../api/api.js';
import navItems from '../data/navItems.json';
import AppNav from '../components/AppNav/AppNav.js';
import { useHistory, useParams } from 'react-router-dom';
const ArticlePage  =() => {
  const[navItem]=  useState(navItems);
  ///refers to lines 32-36
  const[article,setArticle]  = useState({});
  ///getting value from url from lines 15 and 32 articeID
  const params = useParams();
  //referring the NAV item in line 27
  const history = useHistory();

  useEffect(() => {
    //getting article by ID
    fetch(API_URL+'articles/'+params.articleID) 
    .then((response) => { 
        return response.json();
    })
    .then((responseData) => { 
      //setting single article usingWebHook
        setArticle(responseData);
    })
    .catch((error) => {
      alert("Please check your API");
    })
  }, [params])
    return (<>
      <AppNav navItems={navItem} handleNavClick={(clickedItem) => {history.push("/"+clickedItem)}} />
      <div>Article Page</div>
      {/* printing a single article */}
      <Article 
        title ={article.title}
        created_date = {article.created_date}
        abstract = {article.abstract}
        byline={article.byline}
        image ={article.image}
      />

      </>
    );

}

export default ArticlePage;

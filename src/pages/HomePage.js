import React, { useState,useEffect } from 'react';
import {useHistory} from "react-router-dom";
import ArticleList from '../components/ArticleList/ArticleList.js';
import {API_URL} from '../api/api';
import navItems from '../data/navItems.json';
import AppNav from '../components/AppNav/AppNav.js';
const  HomePage = () => {
  //Use webhook use state
  //creates nav menu
  //sets nav item line 49
  const[navItem] = useState(navItems);
  //sets news article from api
  //line 67 
  const[news,setNews] = useState([]);
  //sets byline title
  //line 56
  const[filterKey,setFilterKeys] = useState('');
  //Onkeyup sets the filter value 
  const[filterVal,setFilterVal] = useState('');
  //refers to line 54 pushes url to browser
  const history = useHistory()
  useEffect(()=>{
    //line 23 check the value of the api
      let url = API_URL+'articles';
      //if  user will enter blank value in search box then it will call line 16 and if user will enter any text in search box then it will call line 19
      if(filterVal !== ''){
        url = API_URL+'articles?filter={"where":{"'+filterKey+'":"'+filterVal+'"}}' ;
      } 
      fetch(url) 
      .then((response) => { 
          return response.json();
      })
      .then((responseData) => {   
        setNews(responseData);
      })
      .catch((error) => {
        alert("Please check your API");
      })
      
  },[filterVal,filterKey]);
  //check value by title and byline
const setFilterKey = (e)=>{
  //this call line 11
      setFilterKeys(e.target.value);
  }
  ///setting value for line 23 

const setFilterVals = (e) =>{
  setFilterVal(e.target.value);
}
    return (
      <div>
          {/*creating a new Nav menu and pushing new url to browser without page reload */}
        <AppNav navItems={navItem} handleNavClick={(clickedItem) => {history.push("/"+clickedItem)}} />
        {/* creating the byline and the title  */}
        <div class="row">
          <div class="col-md-3">
            <div class="form-group">
              {/* creating the dropdown box  and the options for the byline box*/}
          <select class="form-control" onChange={(e)=>{setFilterKey(e)}}>
            <option value="byline">By Line</option>
            <option value="title">Title</option>
          </select>
          </div>
          </div>
          <div class="col-md-6">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Please enter your search key..." onKeyUp={(e)=>{setFilterVals(e)}}/>
            </div>
          </div>
        </div>
        {/*  creates news article list*/}
        <ArticleList articles={news} handleTitleClick={(articleID) =>{history.push('/articles/'+articleID);} } />
      </div>
    );
}

export default HomePage;

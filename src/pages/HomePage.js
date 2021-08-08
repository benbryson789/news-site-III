import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js';
import {API_URL} from '../api/api';
//import News from '../data/news.json';
import navItems from '../data/navItems.json';
import AppNav from '../components/AppNav/AppNav.js';
class HomePage extends Component {
  constructor(props) {
    super(props);
      this.state = {
        navItems: navItems,
        ///addind data to this variable
        News:[],
        filterKey:'byline',
    }
    //method is binding with class line 8
    //component did mount and is working like useEffect
    this.fetchArticlesBySection = this.fetchArticlesBySection.bind(this);
    this.setFilterKey = this.setFilterKey.bind(this);
    this.fetchArticles = this.fetchArticles.bind(this);
  }
componentDidMount(){
  this.fetchArticlesBySection();
}
fetchArticlesBySection(){
      let data = this.state;
      fetch(API_URL+'articles') 
      //checking responee
      .then((response) => { 
        //if correct return respone
        return response.json();
      })
      .then((responseData) => { 
        //gettingr response and setting again in state
            data.News = responseData;
            //set state
            this.setState(data);
      })
      .catch((error) => {
        alert("Please check your API");
      })
   
    }
    setFilterKey(e){
      let data = this.state;
      data.filterKey = e.target.value;
    }
    //filter articles by title and byline
    fetchArticles(filter){
      let val = filter.target.value;
      if(val === ""){ this.fetchArticlesBySection(); return false;}
      let data = this.state;
      fetch(API_URL+'articles?filter={"where":{"'+data.filterKey+'":"'+val+'"}}' )
      //checking responee
      .then((response) => { 
        //if correct return respone
        return response.json();
      })
      .then((responseData) => { 
        //gettingr response and setting again in state
            data.News = responseData;
            //set state
            this.setState(data);
      })
      .catch((error) => {
        alert("Please check your API");
      })
    }
  render() {
    const { navItems } = this.state
    return (
      <div>
          {/*creating a new Nav menu and pushing new url to browser without page reload */}
        <AppNav navItems={navItems} handleNavClick={(clickedItem) => {this.props.history.push("/"+clickedItem)}} />
        {/* pushing new url to the browser  without page reload */}
        <div class="row">
          <div class="col-md-3">
            <div class="form-group">
          <select class="form-control" onChange={(e)=>{this.setFilterKey(e)}}>
            <option value="byline">By Line</option>
            <option value="title">Title</option>
          </select>
          </div>
          </div>
          <div class="col-md-6">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Please enter your search key..." onKeyUp={(e)=>{this.fetchArticles(e)}}/>
            </div>
          </div>
       
        </div>
        <ArticleList articles={this.state.News} handleTitleClick={(articleID) =>{this.props.history.push('/articles/'+articleID);} } />
      </div>
    );
  }
}

export default HomePage;

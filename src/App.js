import React  from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
const  App = () => {
  
    return (
      <div className="container">
        <div className="row">
      <div className="col-md-12">
        <h1>AppNav Component</h1>
        <hr />
        
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/articles/:articleID" component={ArticlePage} />
          </div>
        </Router>
      </div>
      </div>
      </div>
    );

}

export default App;

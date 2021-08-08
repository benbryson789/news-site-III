import React from 'react';
const ArticleTeaser = ({
  id, 
  title,
  created_date: createdDate, 
  handleTitleClick 
}) => {
     return (
      <>
      {/* printing an article with title, date, id */}
       <h1><a href="/" onClick={ (e) =>{ e.preventDefault();  handleTitleClick(id); } }>{ title }</a></h1>
        <p><strong>Created Date : </strong>{ createdDate } </p>
        <div>
          {/* creating onclick button prevents default button action from rendering */}
            <div className="more label"><a href="/" className="btn btn-primary" onClick={ (e) =>{ e.preventDefault();  handleTitleClick(id); } } >Read more</a></div> 
              
        </div> 
        <div className="clear"></div>
        <hr></hr>
      </>
    )

}

export default ArticleTeaser;


// Functional solution:
// function ArticleTeaser({ id, title, created_date: createdDate, handleTitleClick }) {
//   return (
//     <div>
//       <a onClick={ () => handleTitleClick(id) }>{ title }</a>
//       <p>{ createdDate }</p>
//     </div>
//   );
// }

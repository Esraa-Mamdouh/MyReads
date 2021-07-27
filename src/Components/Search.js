import React, { Component } from 'react'
import * as BooksAPI from '.././BooksAPI'
import BookItem from './BookItem';
import PropTypes from 'prop-types';

import {
  Link
} from "react-router-dom";
 class Search extends Component {
   state={
     query:"",
     books:[],
   }
   onChangeQuery=(value)=>{
    BooksAPI.search(value)
    .then((books)=>{
      try{
        if(!books.error){
          this.setState(()=>({
          books
        }))}
        else{
        throw books}
      }
      catch(e){
        this.setState(()=>({
                books:[]
              }))
        console.log("catch error",e)
      }
    }
    )
  this.setState(()=>({
       query:value,
     }))
   }
    render() {
      // start debug
      console.log("query=",this.state.query)
      console.log("books=",this.state.books)
      // end debug
        return (
          
        <div className="search-books">
            <div className="search-books-bar">
              <Link to="/">
                <button className="close-search">Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}

                <input 
                type="text" 
                placeholder="Search by title or author"
                onChange={(event)=>this.onChangeQuery(event.target.value)}
                />
              </div>
            </div>
            
            <div className="search-books-results">
              <ol className="books-grid">
              {
                    this.state.books.map((book)=>( 
                    <li key={book.id}>
                      <BookItem 
                      book={book}
                      onShelfChange={this.props.onShelfChange}
                      books={this.props.books}
                      />                
                    </li>
                    )) 
                }
              </ol>
            </div>
          </div>
            
        )
    }
}
BookItem.propTypes={
  onShelfChange:PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
}
export default Search;

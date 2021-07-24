import React, { Component } from 'react'
import * as BooksAPI from '.././BooksAPI'
import BookItem from './BookItem';

 class Search extends Component {
   state={
     query:"",
     books:[],
   }
   onChangeQuery=(value)=>{
    BooksAPI.search(value)
    .then((books)=>
        this.setState(()=>({
          books
        }))
        
      )
     this.setState(()=>({
       query:value,
     }))
   }
  /*   handleSearchBooks = event => {
    this.setState(prevState => ({
      loading: !prevState.loading
    }))

    searchBooks(event.target.value)
      .then(books => {
        if ('error' in books) {
          this.setState(prevState => ({
            books: [],
            loading: !prevState.loading
          }))
        } else {
          this.setState(prevState => ({
            books: books.map(book => {
              // handle if book doesn't contain shelf
              if (!('shelf' in book)) {
                book.shelf = 'none'
              }
              // Find if the array contains an object by comparing the property value
              if (this.props.books.some(({ id }) => id === book.id)) {
                const currentBook = this.props.books.filter(({id}) => id === book.id)
                book.shelf = currentBook[0].shelf
              }
              return book
            }),
            loading: !prevState.loading
          }))
        }
      })
      .catch(error => {
        APIErrorHandling(error)
      })
  }*/
  //onChange={this.handleSearchBooks}
    render() {
      console.log("query=",this.state.query)
      console.log("books=",this.state.books)
        return (
          
        <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
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
                {/* {JSON.stringify(this.state)} */}
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
export default Search;

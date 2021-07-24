import React, { Component } from 'react'
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';
import {
  Link
} from "react-router-dom";


 class Home extends Component {
   componentDidMount(){
   }
    render() {
      //Want to Read   "wantToRead"  Read  "read"
      const {books,onShelfChange}=this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                      <BookShelf 
                      books= {books.filter(book => book.shelf === 'currentlyReading')}
                      shelf="Currently Reading"
                      onShelfChange={onShelfChange}
                      />
                      <BookShelf 
                      books= {books.filter(book => book.shelf === 'wantToRead')}
                      shelf="Want to Read"
                      onShelfChange={onShelfChange}
                      />
                      <BookShelf 
                      books= {books.filter(book => book.shelf === 'read')}
                      shelf="Read"
                      onShelfChange={onShelfChange}
                      />
                  </div>
                </div>
                <div className="open-search">
                  <Link to="/search">
                    <button>Add a book</button>
                  </Link>
                </div>
              </div>
          
        )
    }
}
Home.propTypes={
  books: PropTypes.array.isRequired,
  onShelfChange:PropTypes.func.isRequired,
}
export default  Home;
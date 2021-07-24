import React, { Component } from 'react'
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


 class Home extends Component {
  //  state={
  //   //  books:[],                    //all books (we get as a prop)
  //    CurrentlyReading:[],         //array of current reading
  //    WantToRead:[],               //array of want to read
  //    Read:[]                      //array of read
  //  }
   componentDidMount(){

   }
    render() {
      //Want to Read   "wantToRead"  Read  "read"
      const {books,onShelfChange,search}=this.props
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
                  {/* <button onClick={() => {search()}}>Add a book</button> */}
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
  // CurrentlyReading: PropTypes.array.isRequired,
  // WantToRead:PropTypes.array.isRequired,
  // Read:PropTypes.array.isRequired
}
export default  Home;
import React, { Component } from 'react'
import BookItem from './BookItem';
import PropTypes from 'prop-types';

//{this.state.value == 'news'? <Text>data</Text>: null }
class BookShelf extends Component {
    render() {
      const {books, shelf,onShelfChange}=this.props;
      console.log("BookShlf: currently read")
      console.log("BookShlf: books1")
      console.log(books);
      console.log("BookShlf: books2")
      const b=books.filter(book => (book.shelf === 'currentlyReading'));
     console.log(b);
      console.log("condition");
      console.log(shelf === 'Currently Reading')
      //console.log(CurrentlyReading[0].id)
        return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                  
                 {
                    books.map((book)=>( 
                    <li key={book.id}>
                      <BookItem 
                      book={book}
                      onShelfChange={onShelfChange}
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
BookShelf.propTypes={
  books: PropTypes.array.isRequired,
  // CurrentlyReading: PropTypes.array.isRequired,
  // WantToRead:PropTypes.array.isRequired,
  // Read:PropTypes.array.isRequired,
  shelf:PropTypes.string.isRequired,
  onShelfChange:PropTypes.func.isRequired,
}
export default BookShelf;




import React, { Component } from 'react'
import BookMenu from './BookMenu';
import PropTypes from 'prop-types';

class BookItem extends Component {
    render() {
        console.log("inside BookItem1")
        // const {book, Url, bookTitle,bookAuthors}=this.props;
        const {book,onShelfChange}=this.props;
        const thumbnail = book.imageLinks ? book.imageLinks.smallThumbnail : "../../images/book.jpg"
        console.log("inside BookItem2")
        // console.log(Url, bookTitle,bookAuthors );
        console.log("book",book)
        return (
            
            <div className="book">
                <div className="book-top">
                    {/* <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div> */}
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>

                    <BookMenu
                    book={book}
                    onShelfChange={onShelfChange}
                    />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
            

        )
    }
}
BookItem.propTypes={
    // Url: PropTypes.string.isRequired,
    // bookTitle: PropTypes.string.isRequired,
    // bookAuthors:PropTypes.array.isRequired,
    book:PropTypes.object.isRequired,
    onShelfChange:PropTypes.func.isRequired,

}
export default BookItem;

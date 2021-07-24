import React, { Component } from 'react'
import BookMenu from './BookMenu';
import PropTypes from 'prop-types';

class BookItem extends Component {
    render() {
        const {book,onShelfChange}=this.props;
        const thumbnail = book.imageLinks ? book.imageLinks.smallThumbnail : "../../images/book.jpg"
        // start debug
        console.log("inside BookItem1")
        console.log("inside BookItem2")
        console.log("book",book)
        // end debug
        return (
            
            <div className="book">
                <div className="book-top">
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
    book:PropTypes.object.isRequired,
    onShelfChange:PropTypes.func.isRequired,

}
export default BookItem;

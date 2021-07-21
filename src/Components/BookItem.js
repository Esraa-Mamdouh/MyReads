import React, { Component } from 'react'
import BookMenu from './BookMenu';
import PropTypes from 'prop-types';

class BookItem extends Component {
    render() {
        const {Url, bookTitle,bookAuthors}=this.props;
        console.log(Url, bookTitle,bookAuthors );
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${Url})` }}></div>
                    <BookMenu/>
                </div>
                <div className="book-title">{bookTitle}</div>
                <div className="book-authors">{bookAuthors}</div>
            </div>

        )
    }
}
BookItem.propTypes={
    Url: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
    bookAuthors:PropTypes.array.isRequired
}
export default BookItem;

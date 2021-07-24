import React, { Component } from 'react'
import PropTypes from 'prop-types';

 class BookMenu extends Component {
    render() {
        const {book,onShelfChange}=this.props;
        return (
            <div className="book-shelf-changer">
                <select
                onChange={event => {
                onShelfChange(book, event.target.value)
                }}
                value={book.shelf}
                >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}
BookMenu.propTypes={
    // Url: PropTypes.string.isRequired,
    // bookTitle: PropTypes.string.isRequired,
    // bookAuthors:PropTypes.array.isRequired,
    book:PropTypes.object.isRequired,
    onShelfChange:PropTypes.func.isRequired,

}
export default BookMenu;

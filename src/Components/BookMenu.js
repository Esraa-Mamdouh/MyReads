import React, { Component } from 'react'
import PropTypes from 'prop-types';

 class BookMenu extends Component {
    render() {
        //const books=this.props.books
        const {book,onShelfChange,books}=this.props;
        const b =(books.filter((Book)=>(Book.id === book.id)))
        let s
        if(b.length === 1){
            s=b[0].shelf
        }

        console.log("heeeey",books,s)
        const shelf = (s) ? s : "none"
        console.log("book inside BookMenu",book.title)
        //console.log()
        console.log("shelf =",books.filter(()=>(books.id === book.id)).shelf)
        //console.log()

        return (
            <div className="book-shelf-changer">
                <select
                onChange={event => {
                onShelfChange(book, event.target.value)
                }}
                value={shelf}
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
    book:PropTypes.object.isRequired,
    onShelfChange:PropTypes.func.isRequired,

}
export default BookMenu;

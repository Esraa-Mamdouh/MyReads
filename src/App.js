import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './Components/Home'
import Search from './Components/Search'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[],
    CurrentlyReading:[],         //array of current reading
    WantToRead:[],               //array of want to read
    Read:[] ,                     //array of read
    //TODO: use react router instead of this state
    showSearchPage: false
  }
  componentDidMount(){
       BooksAPI.getAll()
      .then((books)=>
        this.setState(()=>({
          books
        }))
        
      )/*.then((books) =>(
        this.state.books.forEach(book =>{
          if(book.shelf === 'currentlyReading'){
            this.setState((currentState)=>{
              currentState.CurrentlyReading.push(book)
              return currentState.CurrentlyReading;
            })
          }else if(book.shelf === 'wantToRead'){
            this.setState((currentState)=>{
              currentState.WantToRead.push(book)
              return currentState.WantToRead
            })
          }else if(book.shelf === 'read'){
            this.setState((currentState)=>{
              currentState.Read.push(book)
              return currentState.Read
            })
          }
    
        })
      ))*/

  }

  onShelfChange=(book,shelf)=>{
    BooksAPI.update(book, shelf);
    this.setState((currentState)=>{
      currentState.books.forEach(element => {
        if(element.id===book.id){
          element.shelf=shelf;
        }
      });
      return currentState.books;
    })
    console.log("inside onShelChange")
  }
  search=()=>{
    this.setState({ showSearchPage: true })
    console.log("inside search")
  }
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search
          onShelfChange={this.onShelfChange}
          />
        ) : (
          <Home 
          books={this.state.books} 
          onShelfChange={this.onShelfChange}
          search={this.search}
          // CurrentlyReading={this.state.CurrentlyReading}
          // WantToRead={this.state.WantToRead}
          // Read={this.state.Read}
          />)
        }
      </div>
    )
  }
}

export default BooksApp

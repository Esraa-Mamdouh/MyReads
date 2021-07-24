import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './Components/Home'
import Search from './Components/Search'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[],
  }
  componentDidMount(){
       BooksAPI.getAll()
      .then((books)=>
        this.setState(()=>({
          books
        }))
        
      )
  }

  onShelfChange=(book,shelf)=>{
    
    BooksAPI.update(book, shelf)
    //new book exists on my shelf
    
    let exists =false;
    this.state.books.every( element=>{
      if(element.id===book.id){
        exists=true;
        return false;
      }
      console.log("flag= ",exists);
      return true;
    })
    if(exists){
      this.setState((currentState)=>{
        currentState.books.forEach(element => {
          if(element.id===book.id){
            element.shelf=shelf;
          }
        });
        return book;
      })
    }
    else{
      book.shelf=shelf;
      this.setState((currentState)=>({
        books:[...currentState.books,book]
        
      }))
    }
    console.log("inside onShelChange")
  }
  render() {
    return (
      
      <Router>
          <div className="app">
        <Switch>
          <Route exact path="/">
            <Home 
            books={this.state.books} 
            onShelfChange={this.onShelfChange}
          />
          </Route>
          <Route path="/search">
            <Search
              onShelfChange={this.onShelfChange}
            />
          </Route>
        </Switch>
        </div>
      </Router>
        
    )
  }
}

export default BooksApp

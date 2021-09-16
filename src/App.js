import React from 'react'
import './App.css'
import CurrentReading from './Components/HomeComponents/CurrentReading'
import Read from './Components/HomeComponents/Read'
import WantToRead from './Components/HomeComponents/WantToRead'
import FindBook from './Components/SearchComponents/FindBook'
import {Route,Link} from "react-router-dom"
import * as BooksAPI from './BooksAPI';
class BooksApp extends React.Component {
  state = {
    Books:[]
  }
  // Get All Book before the component rendering
  componentDidMount(){
    BooksAPI.getAll().then((Books)=>{
      this.setState(()=>({
        Books
      }));
    })
  }
  // get Books that has shelf currentlyReading from state
  getCurrentReading =() =>{
    let result =this.state.Books.filter(
      book => book.shelf ==="currentlyReading"
    )
    return result;
  }
  // get Books that has shelf read from state
  getRead=()=>{
    let result =this.state.Books.filter(
      book => book.shelf ==="read"
    )
    return result;
  }
  // get Books that has shelf wantToread from state
  getWantToRead=()=>{
    let result= this.state.Books.filter(
      book =>book.shelf === "wantToRead"
    )
    return result;
  }

  //this method change shelf book and update state 
  changeShelfBook=(book,shelf)=>{

    BooksAPI.update(book,shelf).then(()=>{
      book.shelf=shelf;
      // i get this line form github in  https://github.com/sarah-maris/reactnd-project-myreads/blob/master/src/components/Search.js
      // i filter books in main to ensure a uniqe books in main 
      const addBook= this.state.Books.filter(e =>e.id !== book.id);
      addBook.push(book)
      this.setState({
        Books:addBook
      })
    })
  }
  render() {
    return (
      <div className="app">

          <Route  exact path="/search" render={()=>(
            <FindBook 
            searchBook={this.searchBook} 
            Books={this.state.Books}
            changeShelfBook ={this.changeShelfBook}>
            </FindBook>
          )}></Route>

          <Route exact path="/" render={()=>
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {/* this component show Books that have self currentlyReading */}
                <CurrentReading 
                getCurrentReading={this.getCurrentReading}
                changeShelfBook ={this.changeShelfBook}>
                </CurrentReading>

                {/* this component show Books that have self WantToRead */}
                <WantToRead
                getWantToRead={this.getWantToRead}
                changeShelfBook ={this.changeShelfBook}>
                </WantToRead>

                {/* this component show Books that have self read */}
                <Read 
                getRead={this.getRead}
                changeShelfBook ={this.changeShelfBook} >  
                </Read>
              </div>
            </div>
              <div className="open-search">
                <Link to="/search" ><button>Add a book </button></Link>
              </div>
            </div>
          }>
        </Route>
      </div>
    )
  }
}

export default BooksApp;

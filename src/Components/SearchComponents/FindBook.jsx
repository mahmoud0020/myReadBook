import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ShowFindBook from './ShowFindBook';


import * as BookAPI from '../../BooksAPI';
export default class FindBook extends Component {
    state={
        Books:[],
    }
    //this function is search in the api and update state with result of search 
    searchBook=(event)=>{
        if(event){
            console.log(event)
            BookAPI.search(event).then(Books=>{
                if(Books.length  > 0){
                    this.setState(({
                       Books:Books
                    }))
                }else{
                    this.setState(({
                        Books:[]
                    }))
                }
             }); 
        }
        else{
            this.setState((currentState)=>({
                Books:currentState.Books
            }))
        }
        
    }
    // this method is fire the searchBook with the query-value 
    handlechange=(event)=>{
        this.searchBook(event.target.value);
    }

    render() {
        const {Books,changeShelfBook}= this.props;
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search">
                            <button className="close-search">Close</button>
                        </Link>
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author"  onChange={this.handlechange}/>
                        </div> 
                    </div>

                </div>
                {/* this compoenent show the result of search in api  */}
                <ShowFindBook
                BooksInHome = {Books}                // the books in home page 
                matchedBooks = {this.state.Books}    // the books that matched from search 
                changeShelfBook = {changeShelfBook}  // change value of shelf Book 
                >
                </ShowFindBook>
            </div>
        )
    }
}

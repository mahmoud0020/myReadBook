import React, { Component } from 'react'

export default class ShelfControl extends Component {
    
    SelectHandleChange=(event)=>{
        this.props.changeShelfBook(this.props.Book,event.target.value)
    }
    //BooksInHome 
    //Book
    render() {
        if(this.props.search===true){
            var currentshelf;
            this.props.BooksInHome.forEach(element => {
                if(this.props.Book.id===element.id){
                    currentshelf=element.shelf;
                    console.log(currentshelf);
                return;
                }
            });
        }else{
            currentshelf=this.props.Book.shelf;
        }
        
        return (
            <div>
            
                    <div className="book-shelf-changer">
                        <select  onChange={this.SelectHandleChange} value={currentshelf ? currentshelf :"none" } >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
            </div>
        )
    }
}

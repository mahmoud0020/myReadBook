import React, { Component } from 'react'
import ShelfControl from '../ShelfControl';
export default class Read extends Component {
    render() {
        const result = this.props.getRead();
        const {changeShelfBook}=this.props;
        return(
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read </h2>
                    <div className="bookshelf-books">
                        <ol  className="books-grid">
                            {
                                result.map((book)=>
                                    (
                                        <li key={book.id} >
                                            <div className="book">
                                            <div className="book-top">
                                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.smallThumbnail})` }}></div>
                                                {/* component change the value of shelf in the Book  */}
                                                <ShelfControl 
                                                changeShelfBook={changeShelfBook}
                                                Book={book}>
                                                </ShelfControl>
                                            </div>
                                            <div className="book-title">{book.title}</div>
                                            {
                                                book.authors.map((authors)=>
                                                    (
                                                    <div key={authors}className="book-authors">{authors}</div>
                                                    )
                                                )
                                            }
                                            </div>
                                        </li>
                                    )
                                )
                            }
                        </ol>
                    </div>
                </div>
            </div>
        )   
    }
}

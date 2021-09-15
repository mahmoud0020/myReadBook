import React, { Component } from 'react'
import ShelfControl from '../ShelfControl';
import PropTypes from 'prop-types';
export default class ShowFindBook extends Component {
    static propTypes = {
        matchedBooks: PropTypes.array.isRequired,
        changeShelfBook: PropTypes.func.isRequired,
        BooksInHome:PropTypes.array.isRequired,
    };
    
    render() {
       
        const {matchedBooks,changeShelfBook,BooksInHome}=this.props;
        return (
            <div>
                <div className="space"></div>
                <div className="bookshelf">
                    
                    <div className="bookshelf-books">
                        <ol  className="books-grid">
                            {
                                    matchedBooks.map((book)=>(
                                        <li key={book.id} >
                                            <div className="book">
                                            <div className="book-top">
                                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.smallThumbnail})` }}></div>
                                                <ShelfControl
                                                changeShelfBook={changeShelfBook}
                                                Book={book} BooksInHome={BooksInHome}
                                                search={true} 
                                                >
                                                </ShelfControl>
                                            </div>
                                            <div className="book-title">{book.title}</div>
                                            {
                                                book.authors.map((authors)=>(
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

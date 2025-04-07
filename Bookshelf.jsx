import { useState } from 'react';

const [books, setBooks] = useState([
  { title: 'Fourth Wing', author: 'Rebecca Yarros' },
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
]);

<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    const BookForm = () => {
      const [newBook, setNewBook] = useState({
        title: 'Fourth Wing',
        author: 'Rebecca Yarros',

        <h4>Add a Book</h4>
        const BookForm = () => {
          const [newBook, setNewBook] = useState({
            title: 'The Lion, the Witch and the Wardrobe',
            author: 'C.S. Lewis',
      });
    
      return (
        <div>
          <form>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={newBook.title}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Author:
              <input
                type="text"
                name="author"
                value={newBook.author}
                onChange={handleInputChange}
              />
            </label>  
          </form>
          <div>
            <h3>Current Book Details:</h3>
            <p>Title: {newBook.title}</p>
            <p>Author: {newBook.author}</p>
          </div>
        </div>
      );
    };
    
  </div>
  <div className="bookCardsDiv">{const BookShelf = ({ books }) => { 
  return ( }
    <div className="book-shelf">
      {books.map((book, index) => (
        <div key={index} className="book-card">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">{book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BookShelf;}</div>
</div>

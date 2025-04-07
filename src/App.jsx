mport { useState } from 'react';

import './App.css';
import Bookshelf from './Bookshelf.jsx';
  
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf />
    </>
  );
};

import React, { useState } from 'react';

  const handleInputChange = (event) => {
    const { name, value } = event.target;  
    setNewBook((prevBook) => ({
      ...prevBook,  
      [name]: value 
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();  

 setBooks((prevBooks) => [/ newBook        
]);

setNewBook({
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
});
};

return (
<div>
  <form onSubmit={handleSubmit}>
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
    <br />
    <button type="submit">Add Book</button>
  </form>

  <h3>Book List:</h3>
  <ul>
    {books.map((book, index) => (
      <li key={index}>
        {book.title} by {book.author} 
      </li>
    ))}
  </ul>
</div>
);

export default App;


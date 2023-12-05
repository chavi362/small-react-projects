
import { useState } from 'react';
import Book from './Book'


const BooksShelf = () => {
  const [likes, setAllLikes] = useState(1);
    const [books, setBooks] = useState([
      {
        "title": "ISterak",
        "author": "Maya Keinan",
        "sample": "In mamlacha bemivchan",
        "likes": 98,
        "onShelf": true
      },
      {
        "title": "Mahalalel",
        "author": "Maya Keinan",
        "sample": "In mamlacha bemivchan",
        "likes": 150,
        "onShelf": false
      },
      {
        "title": "Yozavd",
        "author": "Maya Keinan",
        "sample": "In mamlacha bemivchan",
        "likes": 108,
        "onShelf": false
      },
      {
        "title": "Padalel",
        "author": "Maya Keinan",
        "sample": "In mamlacha bemivchan",
        "likes": 29,
        "onShelf": true
      },
    ]);

    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        justifyContent: 'center',
        alignSelf:'center',
      };
    
      const cardContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
      };
      const updateLikes = (index) => {
        const updatedBooks = [...books]; 
        updatedBooks[index].likes++; 
      books[index]=updatedBooks[index];
        setBooks(updatedBooks); 
        console.log(books)
          // Calculate the sum of all likes
          const totalLikes = updatedBooks.reduce((total, book) => total + book.likes, 0);
          console.log(totalLikes);
          setAllLikes(totalLikes);
      };
        const buyBook = (index) => {
          const updatedBooks = [...books]; 
          updatedBooks[index].onShelf=false; 
          setBooks(updatedBooks); 
          
      };
     
    
      return (
        <div>
          <h1 style={{ textAlign: 'center' }}>ממלכה במבחן</h1>
          <h1 style={{ textAlign: 'center' }}>Overall Likes: {likes}</h1>
          <div className="book-container" style={containerStyle}>
            <div className="card-container" style={cardContainerStyle}>
              {books.map((book, index) => (
                <Book key={index} index={index} {...book} onLike={updateLikes} onBuy={buyBook}/>
              ))}
            </div>
          </div>
        </div>
      );
    };
    
    export default BooksShelf;
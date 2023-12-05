import React from 'react';

const Book = (props) => {
    const { title, author, sample, likes, onShelf } = props;
    let alertSample = () => {
        alert(sample);
    }
    const cardStyle = {
        backgroundColor: onShelf ? '#FFC0CB' : '#FFFFE0',
        padding: '20px',
        margin: '30px',
        borderRadius: '20px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        width: '500px',
    };

    const titleStyle = {
        fontSize: '37px',
        fontWeight: 'bold',
        marginBottom: '10px',
    };

    const authorStyle = {
        fontSize: '24px',
        marginBottom: '10px',
    };
    const likeBtnStyle = {
        marginRight: "0px"
    }

    const likesStyle = {
        fontSize: '22px',
        marginBottom: '10px',
    };

    const shelfStyle = {
        fontSize: '22px',
        marginBottom: '10px',
        fontWeight: 'bold',
    };

    const popularStyle = {
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'red',
    };
    const handleLike = () => {
        props.onLike(props.index);
    };
    const handleBuy = () => {
        props.onBuy(props.index);
    };
    return (
        <div className="book-card" style={cardStyle}>
            <button onClick={handleLike} style={likeBtnStyle}>like</button>
            {onShelf && <button onClick={handleBuy} style={likeBtnStyle}>Buy me</button>}
            <h2 style={titleStyle}>{title}</h2>
            <p style={authorStyle}>Author: {author}</p>
            <p style={likesStyle}>Likes: {likes}</p>
            <p style={shelfStyle}>{onShelf ? 'On Shelf' : 'Not on Shelf'}</p>
            <button onClick={alertSample}>read</button>
            {likes > 100 && <p style={popularStyle}>Popular Book!</p>}
        </div>
    );
};

export default Book;

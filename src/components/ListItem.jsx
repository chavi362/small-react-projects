import React from 'react'
import './ListItem.css';

const ListItem = ({ item, onAddToCart, onRemoveFromCart }) => {
    const { id, onCart, itemName, imgSrc } = item;
  
    return (
      <div className="list-item">
        <img src={imgSrc} alt={itemName} className="item-image" />
        <div className="item-details">
          <p>{itemName}</p>
          {onCart ? (
            <button onClick={() => onRemoveFromCart(id)}>Remove from Cart</button>
          ) : (
            <button onClick={() => onAddToCart(id)}>Add to Cart</button>
          )}
        </div>
      </div>
    );
  };
  

export default ListItem
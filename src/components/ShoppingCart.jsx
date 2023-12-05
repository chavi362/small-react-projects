import React from 'react';
import CartItem from './CartItem';

const ShoppingCart = (props) => {
  const items = props.items;

  const handleDelete = (id) => {
    console.log(`Deleting item with id ${id}`);
  };

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <CartItem key={item.id} item={item} handleDelete={handleDelete} />
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
      )}
    </main>
  );
};

export default ShoppingCart;

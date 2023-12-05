import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'; // Import FaTrashAlt from react-icons/fa
import './CartItem.css';

const CartItem = (props) => {
  console.log(props);
  const { item, handleDelete } = props;

  return (
    <div>
      <li className="item" key={item.id}>
        <label>{item.item}</label>
        <FaTrashAlt
          onClick={() => handleDelete(item.id)}
          role="button"
          tabIndex="0"
        />
      </li>
    </div>
  );
};

export default CartItem;

import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveItem }) => {
  //conditional rendering:
  let message;
  if (cart.length === 0) {
    message = <h4>Buy at least one item!!!</h4>;
  } else {
    message = <h4>Thanks for buying!!</h4>;
  }

  return (
    <div className='cart'>
      <h2>Order Summary</h2>
      <h4>Order Quantity: {cart.length}</h4>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {' '}
          {tshirt.name}{' '}
          <button onClick={() => handleRemoveItem(tshirt)}>X</button>
        </p>
      ))}
      {message}
      {/* ternary operator: somthing ? true : false */}
      {cart.length < 3 ? (
        <p>You may add more!</p>
      ) : (
        <p>Wow! You have added {cart.length} item.</p>
      )}

      {/* && operator: if condition is true it will render*/}
      {cart.length === 7 && <h4>You have bought the whole shop!</h4>}

      {/* ||operator: if conditoin is false it will render */}
      {cart.length > 7 || <h4>Baper tk nosto koro!!!</h4>}
    </div>
  );
};

export default Cart;

/**
 * conditional rendering:
 * 1. use element in a variabel  and use  if-else  to set value.
 * 2.
 */

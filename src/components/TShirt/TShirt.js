import React from 'react';
import './TShirt.css';

const TShirt = ({ tshirt, handleAddToCart }) => {
  const { name, _id, picture, price } = tshirt;
  return (
    <div className='tshirt'>
      <img src={picture} alt='' />
      <h3>{name}</h3>
      <h4>Price: ${price}</h4>
      <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
    </div>
  );
};

export default TShirt;

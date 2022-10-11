import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
  //load tshirts
  const tshirts = useLoaderData();

  //create cart for added items
  const [cart, setCart] = useState([]);

  // handleADDToCart function delclaration for buy now button
  const handleAddToCart = (tshirt) => {
    const exist = cart.find((item) => item._id === tshirt._id);
    //just add one item once
    if (exist) {
      alert('Item already added to cart! Please select new item.');
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };

  //handle remove item by cross button:
  const handleRemoveItem = (item) => {
    const remaining = cart.filter((ts) => ts._id !== item._id);
    setCart(remaining);
  };

  return (
    <div className='home-container'>
      <div className='t-shirt-container'>
        {' '}
        {/* in home page tshirts will be shown by tshirt component */}
        {tshirts.map((tshirt) => (
          <TShirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}></TShirt>
        ))}
      </div>
      <div className='cart-container'>
        <Cart cart={cart} handleRemoveItem={handleRemoveItem}></Cart>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import C21Com from '../C21Com/C21Com';
import C2Com from '../C2Com/C2Com';

const P2Com = ({ house }) => {
  return (
    <div>
      <h2>P2 Component</h2>
      <p>House: {house}</p>
      <section className='flex'>
        <C2Com house={house}></C2Com>
        <C21Com house={house}></C21Com>
      </section>
    </div>
  );
};

export default P2Com;

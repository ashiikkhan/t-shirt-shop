import React from 'react';
import C1Com from '../C1Com/C1Com';
import C12Com from '../C12Com/C12Com';
const P1Com = ({ house, gift }) => {
  return (
    <div>
      <h2>P1 Component</h2>
      <p>House: {house}</p>
      <section className='flex'>
        <C1Com house={house} gift={gift}></C1Com>
        <C12Com house={house}></C12Com>
      </section>
    </div>
  );
};

export default P1Com;

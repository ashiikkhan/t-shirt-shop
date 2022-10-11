import React from 'react';
import GC1Com from '../GC1Com/GC1Com';

const C1Com = ({ house, gift }) => {
  return (
    <div>
      <h4>C1 Component</h4>
      <p>House: {house}</p>
      <section className='flex'>
        <GC1Com gift={gift}></GC1Com>
      </section>
    </div>
  );
};

export default C1Com;

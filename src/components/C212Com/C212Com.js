import React from 'react';
import GC212Com from '../GC212Com/GC212Com';

const C212Com = ({ house }) => {
  return (
    <div>
      <h4>C2.12 Component</h4>
      <p>House: {house}</p>
      <section className='flex'>
        <GC212Com></GC212Com>
      </section>
    </div>
  );
};

export default C212Com;

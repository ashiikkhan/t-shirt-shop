import React from 'react';
import C212Com from '../C212Com/C212Com';

const P21Com = ({ house }) => {
  return (
    <div>
      <h2>P2.1 Component</h2>
      <p>House: {house}</p>
      <section className='flex'>
        <C212Com house={house}></C212Com>
      </section>
    </div>
  );
};

export default P21Com;

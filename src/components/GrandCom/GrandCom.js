import React, { createContext, useState } from 'react';
import P1Com from '../P1Com/P1Com';
import P21Com from '../P21Com/P21Com';
import P2Com from '../P2Com/P2Com';
import './GrandCom.css';

/* context create:
1. context declare 
2. set context provider 
3. use context 
*/
//context declare
const gift = 'Diamond Ring';
export const RingContext = createContext(gift);

const GrandCom = () => {
  // const gift = 'Golden Ring';
  const [house, setHouse] = useState(1);
  return (
    //set context provider
    <RingContext.Provider value={[house, setHouse]}>
      <div className='grandComp'>
        <h2>Grand Component</h2>
        <p>House: {house}</p>
        <section className='flex'>
          <P1Com house={house} gift={gift}></P1Com>
          <P2Com house={house}></P2Com>
          <P21Com house={house}></P21Com>
        </section>
        <h4>Learn Props Drilling and Context API</h4>
        <h4>Use Context API instead of Props Drilling . </h4>
      </div>
    </RingContext.Provider>
  );
};

export default GrandCom;

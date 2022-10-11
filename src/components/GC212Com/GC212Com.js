import React, { useContext } from 'react';
import { RingContext } from '../GrandCom/GrandCom';

const GC212Com = () => {
  //use context where we want to use context
  const gift = useContext(RingContext);
  const [house, setHouse] = gift;
  return (
    <div>
      <h4>GC2.12 Component</h4>
      <p>Gift: {gift}</p>
      <button onClick={() => setHouse(house + 1)}>Increase</button>
    </div>
  );
};

export default GC212Com;

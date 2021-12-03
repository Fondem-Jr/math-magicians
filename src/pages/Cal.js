/* eslint-disable */
import React from 'react';
import Calculator from '../components/Calculator';

const Cal = () => {
  return (
    <div className="cal-container">
      <div>
      <p>Lets do some math!</p>
    </div>
    <div className="cal-display">
      <Calculator />
    </div>
    </div>
  );
};

export default Cal;

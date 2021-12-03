import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const initialState = {
  total: '0',
  next: '',
  operation: '',
};

const Calculator = () => {
  const [obj, setObj] = useState(initialState);
  const onKeyPressed = (obj, buttonName) => {
    const newObj = calculate(obj, buttonName);
    if (!newObj.next && !newObj.total) {
      newObj.next = 0;
    }
    setObj(newObj);
  };
  return (
    <div className="container">
      <p className="calc-screen">
        {obj.operation}
        {obj.next}
        {obj.total}
      </p>
      <div className="keypad">
        <button onClick={() => onKeyPressed(obj, 'AC')} type="button">AC</button>
        <button onClick={() => onKeyPressed(obj, '+/-')} type="button">+/-</button>
        <button onClick={() => onKeyPressed(obj, '%')} type="button">%</button>
        <button onClick={() => onKeyPressed(obj, '÷')} type="button" className="symbol">÷</button>
        <button onClick={() => onKeyPressed(obj, '7')} type="button">7</button>
        <button onClick={() => onKeyPressed(obj, '8')} type="button">8</button>
        <button onClick={() => onKeyPressed(obj, '9')} type="button">9</button>
        <button onClick={() => onKeyPressed(obj, 'x')} type="button" className="symbol">x</button>
        <button onClick={() => onKeyPressed(obj, '4')} type="button">4</button>
        <button onClick={() => onKeyPressed(obj, '5')} type="button">5</button>
        <button onClick={() => onKeyPressed(obj, '6')} type="button">6</button>
        <button onClick={() => onKeyPressed(obj, '-')} type="button" className="symbol">-</button>
        <button onClick={() => onKeyPressed(obj, '1')} type="button">1</button>
        <button onClick={() => onKeyPressed(obj, '2')} type="button">2</button>
        <button onClick={() => onKeyPressed(obj, '3')} type="button">3</button>
        <button onClick={() => onKeyPressed(obj, '+')} type="button" className="symbol">+</button>
        <button onClick={() => onKeyPressed(obj, '0')} type="button" id="zero">0</button>
        <button onClick={() => onKeyPressed(obj, '.')} type="button">.</button>
        <button onClick={() => onKeyPressed(obj, '=')} type="button" className="symbol">=</button>
      </div>
    </div>
  );
};
export default Calculator;

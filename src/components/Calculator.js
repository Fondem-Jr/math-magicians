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
      </p>
      <form>
        <input type="text" placeholder="0" value={obj.total} />
      </form>
      <div className="keypad">
        <button onClick={() => onKeyPressed(obj, 'AC')} type="button" buttonName="AC">AC</button>
        <button onClick={() => onKeyPressed(obj, '+/-')} type="button" buttonName="+/-">+/-</button>
        <button onClick={() => onKeyPressed(obj, '%')} type="button" buttonName="%">%</button>
        <button onClick={() => onKeyPressed(obj, '÷')} type="button" className="symbol" buttonName="÷">÷</button>
        <button onClick={() => onKeyPressed(obj, '7')} type="button" buttonName="7">7</button>
        <button onClick={() => onKeyPressed(obj, '8')} type="button" buttonName="8">8</button>
        <button onClick={() => onKeyPressed(obj, '9')} type="button" buttonName="9">9</button>
        <button onClick={() => onKeyPressed(obj, 'x')} type="button" className="symbol" buttonName="x">x</button>
        <button onClick={() => onKeyPressed(obj, '4')} type="button" buttonName="4">4</button>
        <button onClick={() => onKeyPressed(obj, '5')} type="button" buttonName="5">5</button>
        <button onClick={() => onKeyPressed(obj, '6')} type="button" buttonName="6">6</button>
        <button onClick={() => onKeyPressed(obj, '-')} type="button" className="symbol" buttonName="-">-</button>
        <button onClick={() => onKeyPressed(obj, '1')} type="button" buttonName="1">1</button>
        <button onClick={() => onKeyPressed(obj, '2')} type="button" buttonName="2">2</button>
        <button onClick={() => onKeyPressed(obj, '3')} type="button" buttonName="3">3</button>
        <button onClick={() => onKeyPressed(obj, '+')} type="button" className="symbol" buttonName="+">+</button>
        <button onClick={() => onKeyPressed(obj, '0')} type="button" id="zero" buttonName="0">0</button>
        <button onClick={() => onKeyPressed(obj, '.')} type="button" buttonName=".">.</button>
        <button onClick={() => onKeyPressed(obj, '=')} type="button" className="symbol" buttonName="=">=</button>
      </div>
    </div>
  );
};
export default Calculator;

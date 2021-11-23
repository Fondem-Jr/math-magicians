import React from 'react';
import './Calculator.css';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <form>
          <input type="text" placeholder="0" />
        </form>
        <div className="keypad">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button" className="symbol">÷</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="symbol">x</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="symbol">-</button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="symbol">+</button>
          <button type="button" id="zero">0</button>
          <button type="button">.</button>
          <button type="button" className="symbol">=</button>
        </div>
      </div>
    );
  }
}
export default Calculator;

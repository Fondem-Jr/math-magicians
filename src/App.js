import React from 'react';
import Calculator from './components/Calculator';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Math Magicians</h1>
        <Calculator />
      </div>
    );
  }
}
export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cal from './pages/Cal';
import Quote from './pages/Quote';

function App() {
  return (
    <>
      <div className="page-container">
        <div className="header-nav">
          <div className="header1">
            <h1>Math Magicians</h1>
          </div>
          <div className="navbar">
            <Navbar />
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calculator">
            <Cal />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
        </Switch>
      </div>
    </>
  );
}
export default App;

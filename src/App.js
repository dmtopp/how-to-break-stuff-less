import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Example1 from './examples/01'
import Example2 from './examples/02'
import { Wrapped as Example3 } from './examples/03Wrapper'
import { Wrapped as Example4 } from './examples/04Wrapper'
import Example5 from './examples/05'
import Example6 from './examples/06'
import Example7 from './examples/07'
import logo from './logo.svg';
import './App.css';

const Home = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
)

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/01/" component={Example1} />
      <Route path="/02/" component={Example2} />
      <Route path="/03/" component={Example3} />
      <Route path="/04/" component={Example4} />
      <Route path="/05/" component={Example5} />
      <Route path="/06/" component={Example6} />
      <Route path="/07/" component={Example7} />
    </Router>

  );
}

export default App;

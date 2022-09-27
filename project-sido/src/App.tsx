import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './custom.css';

import Header from './component/Header';
import Login from './component/Login';
import Signup from './component/Signup';
import Signup2 from './component/Signup2';

function App() {
  return (
    <div className="App">
      <Header name="props.test"/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Login />

      <Signup />

      <Signup2 />
    </div>
  );
}

export default App;

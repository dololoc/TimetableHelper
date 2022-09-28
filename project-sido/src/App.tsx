import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './custom.css';

import Header from './component/Header';
import Login from './component/Login';
import Signup from './component/Signup';
import Signup2 from './component/Signup2';
import Article from './container/article';

function App() {
  return (
    <div className="App">
      <Header name="props.test" />

      <Login />

      <Signup />

      <Signup2 />

      <Article />
    </div>
  );
}

export default App;

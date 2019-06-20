import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Protected Friends Page</Link>
          </li>
        </ul>
        <Route path="/login" component={LoginForm} />
        <Route path="/friends" component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;

//reconfigure Friends Path to a private route once things are underway
//afterwhich, update second Link to say "/protected" then privateRoute to "/protected"

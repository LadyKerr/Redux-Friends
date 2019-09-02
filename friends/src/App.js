import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Friends from './components/Friends';
import AddFriendForm from './components/AddFriendForm';
import PrivateRoute from './components/PrivateRoute';

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
            <Link to="/protected">Protected Friends Page</Link>
          </li>
          <li>
            <Link to="/addform">Add Friend</Link>
          </li>
        </ul>
        <Route path="/login" component={LoginForm} />
        <PrivateRoute exact path="/protected" component={Friends} />
        <PrivateRoute exact path="/addform" component={AddFriendForm} />
      </div>
    </Router>
  );
}

export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './Components/Login';
import Logout from './Components/Logout';
import Friends from './Components/Friends';
import Friend from './Components/Friend';
import AddFriend from './Components/AddFriend';

import PrivateRoute from './Components/PrivateRoute';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("token")));

  const onLoggedIn = () => setIsLoggedIn(true);
  const onLoggedOut = () => setIsLoggedIn(false);

  return (
    <Router>
      <div className="App">

        <ul>
          <li>
            {isLoggedIn && `Welcome, you are logged in as ${localStorage.getItem("username")}.`}
          </li>
          <li>
            {isLoggedIn || <Link to="/login">Login</Link>}
          </li>
          <li>
            {isLoggedIn && <Link to="/addfriend">Add a Friend</Link>}
          </li>
          <li>
            {isLoggedIn && <Link to="/friends">Friends</Link>}
          </li>
          <li>
            {isLoggedIn && <Link to="/logout">Logout</Link>}
          </li>

        </ul>

        <Switch>
          <PrivateRoute exact path="/addfriend" component={AddFriend} />
          <PrivateRoute exact path="/friends/:id" component={Friend} />
          <PrivateRoute exact path="/friends" component={Friends} />
          <PrivateRoute path="/logout" render={props => <Logout {...props} onLoggedOut={onLoggedOut} />} />
          <Route path="/login" render={props => <Login {...props} onLoggedIn={onLoggedIn} />} />
          <Route path="/" render={props => <Login {...props} onLoggedIn={onLoggedIn} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  return (
    <div className="App">
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/signup">Sign up</NavLink>
        </nav>
      </header>

      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

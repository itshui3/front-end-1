import React from 'react';
import { NavLink, Link, Switch, Route } from 'react-router-dom';
import Listing from './components/Listing';
import ListingForm from './components/ListingForm';
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
          <Link to='/protected' >Protected</Link>
          <Link to='/listing' >Listing Component</Link>
          <Link to='/listing-form' >Listing Form</Link>
        </nav>
      </header>

      <Switch>
        {/* <PrivateRoute exact path='/protected' component={Profile} /> */}
        {/* Will need an id to route to correct listing */}
        <Route path='/listing-form'><ListingForm /></Route>
        <Route path='/listing'><Listing /></Route>
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

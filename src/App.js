import React from 'react';
import { NavLink, Link, Switch, Route } from 'react-router-dom';
import Listing from './components/Listing';
import ListingForm from './components/ListingForm';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <div className="App">
      <header>
        <nav className="nav-container">
        <div className="nav-left">
            <i className="fas fa-chart-area fa-3x" id="logo"></i>
        </div>
        <div className="nav-right">
          <a href="https://rg-optimalpricer.netlify.com/">Home</a>
          <NavLink to='/' >Log In</NavLink>
          <NavLink to='/signup' >Sign Up</NavLink>
          <NavLink to='/protected' >Protected</NavLink>
          <NavLink to='/listing' >Listing Component</NavLink>
          <NavLink to='/listing-form' >Listing Form</NavLink>
        </div>
        </nav>
      </header>

      <Switch>
        <PrivateRoute path='/protected/:id' component={Profile} />
        {/* <Route path='/protected'><Profile /></Route> */}
        {/* Will need an id to route to correct listing */}
        <Route path='/listing-form/:id'><ListingForm /></Route>
        <Route path='/listing-form'><ListingForm /></Route>
        <Route path='/listing'><Listing /></Route>
        <Route path="/signup"><Signup /></Route>
        <Route path="/"><Login /></Route>
      </Switch>
    </div>
  );
}

export default App;

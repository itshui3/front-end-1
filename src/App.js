import React from 'react';
import { NavLink, Link, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Listing from './components/Listing';
import ListingForm from './components/ListingForm';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const hostID = useSelector(state => state.host_id);
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
          <NavLink to='/protected' >Your Listings</NavLink>
        </div>
        </nav>
      </header>

      <Switch>
        <PrivateRoute path='/protected' component={Profile} />
        {/* Will need an id to route to correct listing */}
        <Route path='/listing-form/:id'><ListingForm /></Route>
        <Route path='/listing-form'><ListingForm /></Route>
        <Route path="/signup"><Signup /></Route>
        <Route path="/"><Login /></Route>
      </Switch>
    </div>
  );
}

export default App;

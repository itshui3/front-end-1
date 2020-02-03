import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Listing from './components/Listing';
import ListingForm from './components/ListingForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to='/login' >Login</Link>
        </li>
        <li>
          <Link to='/protected' >Protected</Link>
        </li>
        <li>
          <Link to='/listing' >Listing Component</Link>
        </li>
        <li>
          <Link to='/listing-form' >Listing Form</Link>
        </li>
      </ul>
      <Switch>
        {/* <PrivateRoute exact path='/protected' component={Profile} /> */}
        {/* <Route path='/login' ><Login /></Route>
        <Route><Login /></Route> */}

        {/* Will need an id to route to correct listing */}
        <Route path='/listing-form'><ListingForm /></Route>
        <Route path='/listing'><Listing /></Route>
      </Switch>
    </div>
  );
}

export default App;

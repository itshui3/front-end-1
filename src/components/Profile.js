import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../actions';
import Listing from './Listing';

export default () => {
    const hostID = useParams();
    const history = useHistory();
    const listings = useSelector(state => state.listings);
    const isGetting = useSelector(state => state.isGetting);
    const sendListingsToStore = useDispatch();
    console.log('host id in Profile: ', hostID);

    useEffect(() => {
        sendListingsToStore(getData(hostID));
    }, [])

    const handleClick = () => {
        history.push('/listing-form');
    }
    
    const propagateListings = () => {
        if (isGetting) {
            return (<p>Fetching listing data...</p>);
        }
        console.log(listings);
        return listings.map(listing => {
            return (<Listing key={listing.id} listingID={listing.id} />);
        })
    }
    return (
        <div>
            <h1>My Listings</h1>
            <button onClick={handleClick}>Add Listing</button>
            {propagateListings()}
        </div>
    );
}
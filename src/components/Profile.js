import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getData, setHostID } from '../actions';
import Listing from './Listing';

export default () => {
    //TODO: What to do with errors?

    const params = useParams();
    const history = useHistory();
    const listings = useSelector(state => state.listings);
    const isGetting = useSelector(state => state.isGetting);
    const dispatch = useDispatch();

    //set host_id in store

    useEffect(() => {
        if (listings.length === 0) {
            dispatch(getData(params.id));
        }
        dispatch(setHostID(params.id));
    }, [])

    const handleClick = () => {
        history.push('/listing-form');
    }
    
    const propagateListings = () => {
        if (isGetting) {
            return (<p>Fetching listing data...</p>);
        }
        return listings.map(listing => {
            return (<Listing key={listing.id} listingID={listing.id} />);
        })
    }
    return (
        <div>
            <h1>My Listings</h1>
            <button onClick={handleClick}>Add Listing</button>
            <div className='profile-listings'>
                {propagateListings()}
            </div>
        </div>
    );
}
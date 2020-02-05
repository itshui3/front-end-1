import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getData, setHostID } from '../actions';
import Listing from './Listing';

export default () => {
    //TODO: What to do with errors?
    const hostID = localStorage.getItem('host_id')
    const history = useHistory();
    const listings = useSelector(state => state.listings);
    const isGetting = useSelector(state => state.isGetting);
    const dispatch = useDispatch();

    useEffect(() => {
        if (listings.length === 0) {
            dispatch(getData(hostID));
        }
        dispatch(setHostID(hostID));
    })

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
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteListing } from '../actions';

export default props => {
    const listing = useSelector(state => state.listings.find(l => l.id === props.listingID));
    const dispatch = useDispatch();
    //TODO: add delete functionality
    const handleDelete = () => {
        dispatch(deleteListing(listing.id));
    }
    return (
        <div className='listing-container'>
            <img src={listing.image} alt='listing' />
            <p>{listing.neighborhood}</p>
            <p>Beds: {listing.bedrooms}</p>
            <p>Baths: {listing.baths}</p>
            <p>Security Deposit: {listing.deposit}</p>
            <p>Cleaning Fee: {listing.cleaning_fee}</p>
            <h3 className='optimalPrice'>$333</h3>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
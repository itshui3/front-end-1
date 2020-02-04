import React from 'react';
import { useSelector } from 'react-redux';

export default props => {
    const listing = useSelector(state => state.listings.find(l => l.id === props.listingID));
    return (
        <div>
            <img src={listing.image} alt='listing' />
            <p>{listing.neighborhood}</p>
            <p>Beds: {listing.bedrooms}</p>
            <p>Baths: {listing.baths}</p>
            <p>Security Deposit: {listing.deposit}</p>
            <p>Cleaning Fee: {listing.cleaning_fee}</p>
            <h3 className='optimalPrice'>$333</h3>
            <button>Delete</button>
        </div>
    );
}
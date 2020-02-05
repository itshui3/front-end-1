import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteListing, setIsEditing } from '../actions';
import { useHistory } from 'react-router-dom';

export default props => {
    const history = useHistory();
    const listing = useSelector(state => state.listings.find(l => l.id === props.listingID));
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteListing(listing.id));
    }

    const handleEdit = () => {
        dispatch(setIsEditing());
        history.push(`/listing-form/${listing.id}`);
    }
    
    return (
        <div className='listing-container'>
            <img src={listing.image} alt='listing' />
            <p>{listing.neighborhood}</p>
            <p>Beds: {listing.bedrooms}</p>
            <p>Baths: {listing.baths}</p>
            <p>Security Deposit: {listing.deposit}</p>
            <p>Cleaning Fee: {listing.cleaning_fee}</p>
            <h3 className='optimalPrice'>${listing.price}</h3>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
        </div>
    );
}
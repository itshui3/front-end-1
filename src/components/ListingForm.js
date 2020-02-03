import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addListing, updateListing } from '../actions';

export default props => {
    const sendListingData = useDispatch();
    const isEditing = useSelector(state => state.isEditing);
    //sets listing to default or listing object from store if editing
    const [listing, setListing] = useState(isEditing ? 
        useSelector(state => state.listings[props.listingID]) : {
        id: 0,
        image: '',
        address: '',
        bedrooms: 1,
        bathrooms: 1,
        beds: 1,
        deposit: 0,
        cleaningFee: 0,
        minNights: 1
    });

    const handleChange = e => {
        setListing({
            ...listing,
            [e.target.name]: e.target.value
        });
    }

    const addListing = e => {
        e.preventDefault();
        //send listing to store
        //send info to backend axiosWithAuth
        console.log(listing);
        //DO NOT SEND ID
        return sendListingData(addListing(listing));
    }

    const editListing = e => {
        e.preventDefault();
        return sendListingData(updateListing(listing));
        //send info to backend with axiosWithAuth
    }

    return (
        <div>
            <form onSubmit={isEditing ? editListing : addListing} >
                {/* Option to upload image? */}
                <h2>Tell us about your listing.</h2>
                <p>In order to get the best results fill out as many of the fields as you can and be as accurate as possible.</p>
                <label>Listing Image</label>
                <input type='url' name='image' placeholder='image url...' onChange={handleChange} value={listing.image} />
                <label>address</label>
                <input type='text' name='address' placeholder='Address...' required onChange={handleChange} value={listing.address} />
                <label>How many bedrooms?</label>
                <input type='number' name='bedrooms' placeholder='Number of bedrooms...' onChange={handleChange} value={listing.bedrooms} />
                <label>How many bathrooms?</label>
                <input type='number' name='bathrooms' placeholder='Number of bathrooms...' onChange={handleChange} value={listing.bathrooms} />
                <label>How many beds?</label>
                <input type='number' name='beds' placeholder='Number of beds...' onChange={handleChange} value={listing.beds} />
                <label>Security Deposit</label>
                <input type='number' name='deposit' placeholder='Security Deposit' onChange={handleChange} value={listing.deposit} />
                <label>Cleaning Fee</label>
                <input type='number' name='cleaningFee' placeholder='Cleaning Fee' onChange={handleChange} value={listing.cleaningFee} />
                <label>Minimum Nights Stay</label>
                <input type='number' name='minNights' placeholder='Minimum Nights Stay' onChange={handleChange} value={listing.minNights} />
                <button type='submit'>Add Listing</button>
            </form>
        </div>
    );
}
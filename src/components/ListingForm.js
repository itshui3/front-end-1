import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addListing, updateListing } from '../actions';

import './ListingForm.css'

//Defaults as an edit form.
export default props => {
    const sendListingData = useDispatch();
    const hostID = useSelector(state => state.host_id);
    const [isAddingImage, setIsAddingImage] = useState(false);
    const isEditing = useSelector(state => state.isEditing);
    //sets listing to default or listing object from store if editing
    const [listing, setListing] = useState(isEditing ? 
        useSelector(state => state.listings[props.listingID]) : {
        host_id: 0,
        id: 0,
        image: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        bedrooms: 1,
        bathrooms: 1,
        beds: 1,
        deposit: 0,
        cleaningFee: 0,
        minNights: 1
    });

    const hoods = ['Reinickendorf', 'Steglitz - Zehlendorf', 'Tempelhof - Schöneberg', 'Lichtenberg', 'Spandau', 'Charlottenburg-Wilm.', 'Friedrichshain-Kreuzberg', 'Pankow', 'Treptow - Köpenick', 'Mitte', 'Marzahn - Hellersdorf', 'Neukölln'];

    const populateOptions = () => {
        let i = -1;
        return hoods.map(hood => {
            i++;
            return (<option key={i} value={hood}>{hood}</option>);
        })
    }

    const handleChange = e => {
        setListing({
            ...listing,
            [e.target.name]: e.target.value
        });
        if (isAddingImage === false && e.target.name === 'image') {
            setIsAddingImage(true);
        }
    }

    const addNewListing = e => {
        e.preventDefault();
        //send listing to store
        //get the host_id from the state
        const listingToAdd = {...listing, host_id: hostID};
        //send info to backend axiosWithAuth
        //redirect back to profile on success
        // history.push('/protected');
        //redirect back to listing form on failure with error
        // history.push('/listing-form');
        console.log(listing);
        //DO NOT SEND ID
        return sendListingData(addListing(listingToAdd));
    }

    const editListing = e => {
        e.preventDefault();
        //send info to backend with axiosWithAuth
        //redirect back to profile on success
        // history.push('/protected');
        //redirect back to listing form on failure with error
        // history.push('/listing-form');
        return sendListingData(updateListing(listing));
    }

    //TODO: set up regex patterns
    return (
        <div className='container'>
            <div className='innerContainer'>
            
            <form onSubmit={isEditing ? editListing : addNewListing} >
                <div className="blur">
                {/* Option to upload image? */}
                <h2 className="text">Tell us about your listing.</h2>
                <p className="text">In order to get the best results fill out as many of the fields as you can and be as accurate as possible.</p>
                <label className="FormField__Label">Listing Image</label>
                <input type='url' className="FormField__Input" name='image' placeholder='image url...' onChange={handleChange} value={listing.image} />
                
                <div>
                {isAddingImage ? (<img src={listing.image} className='imageNew' alt='No Image Found' />) : (<></>)}
                <label className="FormField__Label">Neighborhood</label>
                {/* TODO: Separate street, city, state, zip  required*/}
                <select className="FormField__Input" name='neighborhood' onChange={handleChange} >
                    {populateOptions()}
                </select>
                </div>

                <div>
                <label className="FormField__Label">How many bedrooms?</label>
                <input className="FormField__Input" type='number' name='bedrooms' placeholder='Number of bedrooms...' onChange={handleChange} value={listing.bedrooms} />
                </div>
                <div>
                <label className="FormField__Label">How many bathrooms?</label>
                <input type='number' className="FormField__Input" name='bathrooms' placeholder='Number of bathrooms...' onChange={handleChange} value={listing.bathrooms} />
                </div>
                <div>
                <label className="FormField__Label">How many beds?</label>
                <input type='number' className="FormField__Input" name='beds' placeholder=' Number of beds...' onChange={handleChange} value={listing.beds} />
                </div>
                <div>
                <label className="FormField__Label">Security Deposit</label>
                <input type='number' className="FormField__Input" name='deposit' placeholder='Security Deposit' onChange={handleChange} value={listing.deposit} />
                </div>
                <div>
                <label className="FormField__Label">Cleaning Fee</label>
                <input type='number' className="FormField__Input" name='cleaningFee' placeholder='Cleaning Fee' onChange={handleChange} value={listing.cleaningFee} />
                </div>
                <div>
                <label className="FormField__Label">Minimum Nights Stay</label>
                <input type='number' className="FormField__Input" name='minNights' placeholder='Minimum Nights Stay' onChange={handleChange} value={listing.minNights} />
                </div>
                </div>
                <button type='submit' className="FormField__Button mr-20">Add Listing</button>
            </form>
            
            </div>
        </div>
    );
}
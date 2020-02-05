import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addListing, updateListing } from '../actions';
import { useHistory } from 'react-router-dom';

//Defaults as an edit form.
export default props => {
    const history = useHistory();
    const sendListingData = useDispatch();
    const hostID = useSelector(state => state.host_id);
    const [isAddingImage, setIsAddingImage] = useState(false);
    const isEditing = useSelector(state => state.isEditing);
    //sets listing to default or listing object from store if editing
    const [listing, setListing] = useState(isEditing ? 
        useSelector(state => state.listings[props.listingID]) : {
        host_id: hostID,
        // id: 0,
        image: '',
        neighborhood: 'Reinickendorf',
        room_type: 'Entire home/apt',
        bedrooms: 1,
        bathrooms: 1,
        beds: 1,
        deposit: 5.00,
        cleaning_fee: 5.00,
        min_nights: 1
    });

    const hoods = ['Reinickendorf', 'Steglitz - Zehlendorf', 'Tempelhof - Schöneberg', 'Lichtenberg', 'Spandau', 'Charlottenburg-Wilm.', 'Friedrichshain-Kreuzberg', 'Pankow', 'Treptow - Köpenick', 'Mitte', 'Marzahn - Hellersdorf', 'Neukölln'];

    const roomTypes = ['Entire home/apt', 'Private room', 'Shared room', 'Hotel room'];

    const populateHoodOptions = () => {
        let i = -1;
        return hoods.map(hood => {
            i++;
            return (<option key={i} value={hood}>{hood}</option>);
        })
    }

    const populateRoomTypeOptions = () => {
        let i = -1;
        return roomTypes.map(room => {
            i++;
            return (<option key={i} value={room}>{room}</option>);
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
        //get the host_id from the state
        const listingToAdd = {...listing, host_id: parseInt(hostID)}; //Change from being hard-coded
        console.log('This is listingToAdd in ListingForm: ', listingToAdd);
        history.push(`/protected/${hostID}`);
        return sendListingData(addListing(listingToAdd));
    }

    const editListing = e => {
        e.preventDefault();
        //send info to backend with axiosWithAuth
        //redirect back to profile on success
        // history.push('/protected');
        //redirect back to listing form on failure with error
        // history.push('/listing-form');
        history.push('/protected');
        return sendListingData(updateListing(listing));
    }

    //TODO: set up regex patterns
    return (
        <div>
            <form onSubmit={isEditing ? editListing : addNewListing} >
                {/* Option to upload image? */}
                <h2>Tell us about your listing.</h2>
                <p>In order to get the best results fill out as many of the fields as you can and be as accurate as possible.</p>
                <label>Listing Image</label>
                <input type='url' name='image' placeholder='image url...' onChange={handleChange} value={listing.image} />
                {isAddingImage ? (<img src={listing.image} alt='No Image Found' />) : (<></>)}
                <label>Neighborhood</label>
                {/* TODO: Separate street, city, state, zip  required*/}
                <select name='neighborhood' onChange={handleChange} >
                    {populateHoodOptions()}
                </select>
                <select name='room_type' onChange={handleChange} >
                    {populateRoomTypeOptions()}
                </select>
                <label>How many bedrooms?</label>
                <input type='number' name='bedrooms' placeholder='Number of bedrooms...' onChange={handleChange} value={listing.bedrooms} />
                <label>How many bathrooms?</label>
                <input type='number' name='bathrooms' placeholder='Number of bathrooms...' onChange={handleChange} value={listing.bathrooms} />
                <label>How many beds?</label>
                <input type='number' name='beds' placeholder='Number of beds...' onChange={handleChange} value={listing.beds} />
                <label>Security Deposit</label>
                <input type='number' name='deposit' placeholder='Security Deposit' onChange={handleChange} value={listing.deposit} />
                <label>Cleaning Fee</label>
                <input type='number' name='cleaning_fee' placeholder='Cleaning Fee' onChange={handleChange} value={listing.cleaning_fee} />
                <label>Minimum Nights Stay</label>
                <input type='number' name='min_nights' placeholder='Minimum Nights Stay' onChange={handleChange} value={listing.min_nights} />
                <button type='submit'>Add Listing</button>
            </form>
        </div>
    );
}
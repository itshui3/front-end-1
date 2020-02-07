import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteListing, setIsEditing } from '../actions';
import { useHistory } from 'react-router-dom';
import './Listing.css';

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
            <div className="listingImg" >
                <img className="imgPanel" src={listing.image} alt='' />
                <div className="overlay">
                    <p className="optimalPriceHover">€{listing.price}</p>
                </div>
            </div>
            <p className="neighborhoodText">{listing.neighborhood}</p>
            <div className="cardInfo">
            <p className="cardText">Beds: {listing.bedrooms}</p>
            <p className="cardText">Baths: {listing.bathrooms}</p>
            <p className="cardText">Security Deposit: €{listing.deposit}</p>
            <p className="cardText">Cleaning Fee: €{listing.cleaning_fee}</p>
            </div>
            <h3 className='optimalPrice'>Optimal Price<br></br>€{listing.price}</h3>
            <div className="cardButtonsDiv">
            <button className="buttonDelete" onClick={handleDelete}>Delete</button>
            <button className="buttonEdit" onClick={handleEdit}>Edit</button>
            </div>
        </div>
    );
}
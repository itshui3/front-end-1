import React from 'react';
import { useSelector } from 'react-redux';

export default props => {
    const listing = useSelector(state => state.listings[props.listingID]);
    return (
        <div>
            <img />
            <p>{}</p>
    <p>Beds: {}</p>
            <p>Baths: </p>
            <p>Security Deposit: </p>
            <p>Cleaning Fee: </p>
            <h3 className='optimalPrice'>$333</h3>
        </div>
    );
}
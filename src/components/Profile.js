import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getData, setHostID } from '../actions';
import FadeIn from 'react-fade-in';
import Listing from './Listing';
import EdiText from 'react-editext'

import './Profile.css'


export default () => {
    //TODO: What to do with errors?
    const hostID = localStorage.getItem('host_id')
    const history = useHistory();
    const listings = useSelector(state => state.listings);
    const isGetting = useSelector(state => state.isGetting);
    const dispatch = useDispatch();
    const initialRender = useRef(true);

    const [openDiv, setOpenDiv] = useState(false)

    const [listingLength, setListing] = useState('idk')
    const [value, setValue] = useState({
        name: 'name',
        number: 'phone Number',
        email: 'youremail@email.com'
    })
 




  const handleSave = val => {
    console.log('Edited Value -> ', val)
    setValue(val)
  }




    useEffect(() => {
        if (initialRender.current) {
            dispatch(getData(hostID));
            initialRender.current = false;
            
        }
        dispatch(setHostID(hostID));
    })
    useEffect(() => {numberedListings()})
    const handleClick = () => {
        history.push('/listing-form');
    }

    const numberedListings = () =>{
        let newOne = listings.length
        console.log(listings)
        setListing(`${newOne}`)
    }
 
    
    const propagateListings = () => {
        
        if (isGetting) {
            return (<p>Fetching listing data...</p>);
        }
        return listings.map(listing => {
            
            return (
            <FadeIn className = 'nextTry'>
            <Listing className='listingCard'  key={listing.id} listingID={listing.id}/>
            </FadeIn>
            );
        })
    }
    return (
        <div>  
            <FadeIn >
                <FadeIn delay='500' transitionDuration='600'>
                <div classsName='container'>
                    <div className='containerProfile'>
                        
                        <div>
                            <div>
                            <FadeIn delay='600' transitionDuration='600'>
                            <img 
                            className='pics'
                            src='https://mastodon.sdf.org/system/accounts/avatars/000/108/313/original/035ab20c290d3722.png?1541993604'/>
                            </FadeIn>
                            </div ><div className='blur'>
                        <div className="boxing">
                            <h2>Total Listings: {listingLength}</h2>
                            <div className = 'nextTry'> 
                                    <EdiText
                                        className = 'editable'
                                        type="text"
                                        value={value.name}
                                        onSave={handleSave}
                                        />
                                    <EdiText
                                        className = 'editable'
                                        type="email"
                                        value={value.email}
                                        onSave={handleSave}
                                        />
                                    <EdiText
                                        className = 'editable'
                                        type="number"
                                        value={value.number}
                                        onSave={handleSave}
                                        />
                            </div>
                            <button onClick={handleClick} className="FormField__Button">Add New Listing</button>
                            </div>
                            </div>
                            </div>
                    </div>
                    </div>
                </FadeIn>
                
                <h1 className='topText'>My Listings</h1>

                <div className='profile-listings'>
                    {propagateListings()}
                </div>
                
            </FadeIn>
        </div>
    );
}
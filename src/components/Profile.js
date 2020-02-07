import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input } from 'reactstrap';
import { getData, setHostID, getProfileData, updateProfile } from '../actions';
import FadeIn from 'react-fade-in';
import Listing from './Listing';
import EdiText from 'react-editext';
import './Profile.css';

import './Profile.css'

const initialItem = {
    image:'https://mastodon.sdf.org/system/accounts/avatars/000/108/313/original/035ab20c290d3722.png?1541993604',
    name: 'name',
    number: 'phone Number',
    email: 'youremail@email.com'
}
let initialRender = true;

export default (props) => {
    //TODO: What to do with errors?
    const hostID = localStorage.getItem('host_id')
    const history = useHistory();
    const listings = useSelector(state => state.listings);
    const isGetting = useSelector(state => state.isGetting);
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    const [listingLength, setListing] = useState(listings.length);

    const initialProfileValues = {
        image:'https://mastodon.sdf.org/system/accounts/avatars/000/108/313/original/035ab20c290d3722.png?1541993604',
        name: 'name',
        phone: 'phone Number',
        email: 'youremail@email.com'
    }

    const setInitialValues = () => {
        let initialValues = {}
        profile.image ? initialValues.image = profile.image : initialValues.image = initialProfileValues.image;
        profile.name ? initialValues.name = profile.name : initialValues.name = initialProfileValues.name;
        profile.phone ? initialValues.phone = profile.phone : initialValues.phone = initialProfileValues.phone;
        profile.email ? initialValues.email = profile.email : initialValues.email = initialProfileValues.email;
        return initialValues;
    }

    const [value, setValue] = useState(setInitialValues());

    const [profilePic, setProfilePic] = useState(value.image);


    const handleNameSave = val => {
        setValue({...value, name: val});
        dispatch(updateProfile(hostID, {...value, name: val}));
    }

    const handlePhoneSave = val => {
        console.log('this is val in handlePhoneSave: ', val.length);
        setValue({...value, phone: val});
        dispatch(updateProfile(hostID, {...value, phone: val}));
    }

    const handleEmailSave = val => {
        setValue({...value, email: val});
        dispatch(updateProfile(hostID, {...value, email: val}));
    }

    useEffect(() => {numberedListings()})
    const handleClick = () => {
        history.push('/listing-form');
    }

    const numberedListings = () =>{
        let newOne = listings.length
        console.log('this is listings in numberedListings in Profile: ', listings)
        setListing(`${newOne}`)
    }

    const handleChange = e => {
        setProfilePic(e.target.value);
    }

    const handleProfilePicSave = e => {
        e.preventDefault();
        toggle();
        setValue({...value, image: profilePic});
        dispatch(updateProfile(hostID, {...value, image: profilePic}));
    }

    const [openDiv, setOpenDiv] = useState(false)
 
    const openTheDiv =()=>{
        setOpenDiv(!openDiv)
    }

    const handleSave = e => {
        e.preventDefault();
        setValue(e);
        history.push(`/protected/${hostID}`);
        return  dispatch(updateProfile(hostID));
    }

    useEffect(() => {
        if (initialRender) {
            dispatch(getData(hostID));
            initialRender = false;
            dispatch(getProfileData(hostID));
        }
        dispatch(setHostID(hostID));
    });
    
    const propagateListings = () => {
        if (isGetting) {
            return (<p>Fetching listing data...</p>);
        }
        return listings.map(listing => {
            return (
                <FadeIn key={listing.id} className = 'nextTry'>
                    <Listing key={listing.id} listingID={listing.id} />
                </FadeIn>
            );
        });
    }

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    return (
        <div>  
            <FadeIn >
                <FadeIn delay='500' transitionDuration='600'>
                <div>
                    <div className='containerProfile'>
                        
                        <div>
                            <div>
                            <FadeIn delay='600' transitionDuration='600'>
                                {/* ADD modal that appears when img is clicked to change profile pic. */}
                                <img onClick={toggle}
                                className='pics'
                                src={value.image}/>
                                <Modal size='lg' isOpen={modal} toggle={toggle} className='neighborhood-modal' >
                                    <ModalHeader toggle={toggle}>Profile Picture</ModalHeader>
                                    <ModalBody className='modal-body profile-pic-modal-body'>
                                        <Input type='url' name='image' placeholder='image url...' onChange={handleChange} value={profilePic} />
                                        <img src={profilePic} alt='No Image Found' />
                                    </ModalBody>
                                    <ModalFooter >
                                    <Button color="primary" onClick={handleProfilePicSave}>Save</Button>
                                    </ModalFooter>
                                </Modal>
                            </FadeIn>
                            </div >
                            <div className='blur'>
                            <div className="boxing">
                            <h2>Total Listings: {listingLength}</h2>
                            <div className='nextTry'> 
                                <EdiText
                                    buttonsAlign='before'
                                    className = 'editable'                   
                                    type="text"
                                    value={value.name}
                                    onSave={handleNameSave}
                                    />
                                <EdiText
                                    buttonsAlign='before'
                                    className = 'editable'
                                    type="email"
                                    value={value.email}
                                    onSave={handleEmailSave}
                                    />
                                <EdiText
                                    buttonsAlign='before'
                                    className = 'editable'
                                    type="tel"
                                    pattern="[0-9]{10}"
                                    value={value.phone}
                                    onSave={handlePhoneSave}
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
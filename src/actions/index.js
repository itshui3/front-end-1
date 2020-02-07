import { axiosWithAuth } from '../utils';

export const REGISTER_START = "REGISTER_START"; //using loading spinners?
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOGIN_START = "LOGIN_START"; //using loading spinners?
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
//Getting all data when app is opened
export const GET_DATA_START = "GET_DATA_START"; //using loading spinners?
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";
export const GET_PROFILE_START = "GET_PROFILE_START"; //using loading spinners?
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_FAILURE = "GET_PROFILE_FAILURE";
export const UPDATE_PROFILE_START = "UPDATE_PROFILE_START"; //using loading spinners?
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAILURE = "UPDATE_PROFILE_FAILURE";
export const UPDATE_LISTING_START = "UPDATE_LISTING_START"; //using loading spinners?
export const UPDATE_LISTING_SUCCESS = "UPDATE_LISTING_SUCCESS";
export const UPDATE_LISTING_FAILURE = "UPDATE_LISTING_FAILURE";
export const ADD_LISTING_START = "ADD_LISTING_START"; //using loading spinners?
export const ADD_LISTING_SUCCESS = "ADD_LISTING_SUCCESS";
export const ADD_LISTING_FAILURE = "ADD_LISTING_FAILURE";
export const DELETE_LISTING_SUCCESS = "DELETE_LISTING_SUCCESS";
export const DELETE_LISTING_FAILURE = "DELETE_LISTING_FAILURE";
export const SET_HOST = 'SET_HOST';

export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START }); //using loading spinners?
    //axios post call.
    //load token into localStorage
}

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START }); //using loading spinners?
    //axios post call.
    //load token into localStorage
}

export const logout = () => dispatch => {
    //Take token out of state and local storage.
}

export const getData = hostID => dispatch => {
    dispatch({ type: GET_DATA_START }); //using loading spinners?

    axiosWithAuth()
        .get(`api/restricted/listings/${parseInt(hostID)}`)
        .then(res => {
            dispatch({ type: GET_DATA_SUCCESS, payload: res.data.resource});
        }).catch(err => console.log(err));
}

export const getProfileData = hostID => dispatch => {
    dispatch({ type: GET_PROFILE_START }); //using loading spinners?

    axiosWithAuth()
        .get(`api/restricted/hosts/${parseInt(hostID)}`)
            .then(res => {
            dispatch({ type: GET_PROFILE_SUCCESS, payload: res.data.resource});
            }).catch(err => console.log(err));
}

export const updateProfile = (hostID, updatedProfile) => dispatch => {
    dispatch({ type: UPDATE_PROFILE_START }); //using loading spinners?
    //axios with auth put call.
    axiosWithAuth()
        .put(`api/restricted/hosts/${hostID}`, updatedProfile)
        .then(res => {
            dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: res.data.resource});
        }).catch(err => {
            dispatch({ type: UPDATE_PROFILE_FAILURE, payload: err.data });
        });
}

export const updateListing = updatedListing => dispatch => {
    axiosWithAuth()
        .put(`api/restricted/listings/${updatedListing.id}`, updatedListing)
        .then(res => {
            dispatch({ type: UPDATE_LISTING_SUCCESS, payload: res.data.resource});
        }).catch(err => {
            dispatch({ type: UPDATE_LISTING_FAILURE, payload: err.data });
        });
}

export const addListing = listing => dispatch => {
    dispatch({ type: ADD_LISTING_START }); //using loading spinners?

    axiosWithAuth()
        .post(`api/restricted/listings`, listing).then(res => {
            //Change to not an array
            dispatch({ type: ADD_LISTING_SUCCESS, payload: res.data.resource});
        }).catch(err => console.log(err));
}

export const deleteListing = id => dispatch => {
    axiosWithAuth().delete(`api/restricted/listings/${id}`)
        .then(res => {
            dispatch({ type: DELETE_LISTING_SUCCESS, payload: parseInt(id)});
        }).catch(err => console.log(err));
}

export const setHostID = hostID => dispatch => {
    dispatch({ type: SET_HOST, payload: hostID });
}

export const setIsEditing = () => dispatch => {
    dispatch({ type: UPDATE_LISTING_START });
}
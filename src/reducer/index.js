import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    GET_DATA_START,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE,
    UPDATE_PROFILE_START,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE,
    UPDATE_LISTING_START,
    UPDATE_LISTING_SUCCESS,
    UPDATE_LISTING_FAILURE,
    ADD_LISTING_START,
    ADD_LISTING_SUCCESS,
    ADD_LISTING_FAILURE,
    DELETE_LISTING_SUCCESS,
    DELETE_LISTING_FAILURE
  } from "../actions";

//optimal price stored in listing object?
const initialState = {
    token: '',
    profile: {},
    listings: [],
}

//Are we going to use loader spinners? If so, We'll have to keep track of loading state
//for varios components and need more actions/dispatches. For example : GET_DATA_START

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;
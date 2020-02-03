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
//This is a dummy state. We don't know what the state will look like yet.
const initialState = {
    token: '',
    profile: {},
    listings: [],
}

//Are we going to use loader spinners? If so, We'll have to keep track of loading state
//for various components and need more actions/dispatches. For example : GET_DATA_START

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START: //using loading spinners?
            return {}
        case REGISTER_SUCCESS:
            return {}
        case REGISTER_FAILURE:
            return {}
        case LOGIN_START: //using loading spinners?
            return {}
        case LOGIN_SUCCESS:
            return {}
        case LOGIN_FAILURE:
            return {}
        case LOGOUT:
            return {}
        case GET_DATA_START: //using loading spinners?
            return {}
        case GET_DATA_SUCCESS:
            return {}
        case GET_DATA_FAILURE:
            return {}
        case UPDATE_PROFILE_START: //using loading spinners?
            return {}
        case UPDATE_PROFILE_SUCCESS:
            return {}
        case UPDATE_PROFILE_FAILURE:
            return {}
        case UPDATE_LISTING_START: //using loading spinners?
            return {}
        case UPDATE_LISTING_SUCCESS:
            return {}
        case UPDATE_LISTING_FAILURE:
            return {}
        case ADD_LISTING_START: //using loading spinners?
            return {}
        case ADD_LISTING_SUCCESS:
            return {}
        case ADD_LISTING_FAILURE:
            return {}
        case DELETE_LISTING_SUCCESS:
            return {}
        case DELETE_LISTING_FAILURE:
            return {}
        default:
            return state;
    }
}

export default reducer;
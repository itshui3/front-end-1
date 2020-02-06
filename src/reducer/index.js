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
    DELETE_LISTING_FAILURE,
    SET_HOST,
    GET_PROFILE_START,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILURE
  } from "../actions";

const initialState = {
    isAdding: false,
    isEditing: false,
    isDeleting: false,
    isGetting: true,
    error: '',
    token: '',
    host_id: 0,
    profile: {
        image: '',
        name: '',
        email: '',
        phone: ''
    },
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
            case GET_PROFILE_START: //using loading spinners?
            return {
                ...state,
                isGetting: true,
                error: ''
            }
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                isGetting: false,
                profile: action.payload,
                error: ''
            }
        case GET_PROFILE_FAILURE:
            return {
                ...state,
                isGetting: false,
                error: action.payload
            }
        case GET_DATA_START: //using loading spinners?
            return {
                ...state,
                isGetting: true,
                error: ''
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                isGetting: false,
                listings: action.payload,
                error: ''
            }
        case GET_DATA_FAILURE:
            return {
                ...state,
                isGetting: false,
                error: action.payload
            }
        case UPDATE_PROFILE_START: //using loading spinners?
            return {
                ...state,
                isEditing: true,
                error: ''
            }
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                isEditing: false,
                error: '',
                profile: action.payload
            }
        case UPDATE_PROFILE_FAILURE:
            return {
                ...state,
                error: `Something went wrong. ${action.payload}`
            }
        case UPDATE_LISTING_START: //using loading spinners?
            return {
                ...state,
                isEditing: true,
                error: ''
            }
        case UPDATE_LISTING_SUCCESS:
            return {
                ...state,
                isEditing: false,
                error: '',
                listings: state.listings.map(listing => {
                    if (listing.id === action.payload.id) {
                        return action.payload;
                    }
                    return listing;
                })
            }
        case UPDATE_LISTING_FAILURE:
            return {
                ...state,
                error: `Something went wrong. ${action.payload}`
            }
        case ADD_LISTING_START: //using loading spinners?
            return {
                ...state,
                isAdding: true,
                error: ''
            }
        case ADD_LISTING_SUCCESS:
            return {
                ...state,
                isAdding: false,
                error: '',
                listings: [
                    ...state.listings,
                    action.payload
                ]
            }
        case ADD_LISTING_FAILURE:
            return {
                ...state,
                error: `Something went wrong. ${action.payload}`
            }
        case DELETE_LISTING_SUCCESS:
            return {
                ...state,
                listings: state.listings.filter(listing => listing.id !== action.payload),
                error: ''
            }
        case DELETE_LISTING_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case SET_HOST:
            return {
                ...state,
                host_id: action.payload
            }
        default:
            return state;
    }
}

export default reducer;
//optimal price stored in listing object?
const initialState = {
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
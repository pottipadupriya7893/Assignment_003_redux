const initial_state = {
    countries: [], 
    error:null
}
const regionReducer = (state = initial_state, action) => {
    switch (action.type ) {
        case "FETCH_REGIONS":
        return {
            ...state,
            countries: action.payload
        }
        case "ERROR_REQUEST":
            return {
                ...state,
                error: action.payload
            }
            default:
                return state;
    } 
    
}

export default regionReducer;
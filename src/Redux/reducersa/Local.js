function localReducer(state = '/Home', action) {
    if(action.type === 'LOCAL') {
        return state = action.payload
    } else {
        return state;
    }
} 

export default localReducer;
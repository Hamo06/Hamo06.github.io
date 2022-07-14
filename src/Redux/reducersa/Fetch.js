function fetchrReducer(state = [], action) {
    if(action.type === 'FETCH') {
        return state = action.payload
    } else {
        return state;
    }
} 

export default fetchrReducer;
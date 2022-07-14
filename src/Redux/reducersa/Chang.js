function changeReducer(state = "", action) {
    if(action.type === 'CHANGE') {
        return state = action.payload
    } else {
        return state;
    }
} 

export default changeReducer;
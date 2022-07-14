function popupstatusReducer(state = true, action) {
    if(action.type === 'STATUS') {
        return state = action.payload
    } else {
        return state;
    }
} 

export default popupstatusReducer;
function popupReducer(state = {}, action) {
    if(action.type === 'POP') {
        return state = action.payload
    } else {
        return state;
    }
} 

export default popupReducer;
import { combineReducers } from "redux";
import fetchrReducer from "./Fetch";
import localReducer from "./Local";
import popupReducer from "./Popup";
import popupstatusReducer from "./popupstat";
import changeReducer from "./Chang";


export const reducers = combineReducers({
    fetchrReducer,
	localReducer,
	popupReducer,
	popupstatusReducer,
	changeReducer

})
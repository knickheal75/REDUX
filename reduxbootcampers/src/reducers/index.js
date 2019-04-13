import { combineReducers } from "redux";
import BootcampersReducer from "./reducer_bootcampers"; 
import ActiveBootcamper from "./reducer_active_bootcamper"

const rootReducer = combineReducers({
    bootcampers:BootcampersReducer,
    activeBootcamper:ActiveBootcamper
})

export default rootReducer;

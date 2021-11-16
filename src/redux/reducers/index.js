import beersReducer from "./beersReducer";
import { combineReducers } from "redux";
import beersRandoomReducer from "./beersRandoomReducer"

const rootReducer = combineReducers({
   beers: beersReducer,
   randoomBeers: beersRandoomReducer,
   
});

export default rootReducer;
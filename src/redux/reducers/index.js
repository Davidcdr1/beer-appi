import beersReducer from "./beersReducer";
import { combineReducers } from "redux";
import beersRandoomReducer from "./beersRandoomReducer";
import homeBeersReducer from "./homeBeersReducer";
import cartReducer from "./cartReducer";
import { detailReducer }  from "./detailReducer";

const rootReducer = combineReducers({
   beers: beersReducer,
   randoomBeers: beersRandoomReducer,
   homeBeers: homeBeersReducer,
   cart: cartReducer,
   detail: detailReducer
   
});

export default rootReducer;
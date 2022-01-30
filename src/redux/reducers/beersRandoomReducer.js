import randoomBeersTypes from "../actions/randoomBeersTypes";

function beersRandoomReducer(randoomBeers =[], action) {

    
    switch(action.type) {
        case randoomBeersTypes.LOADD_RANDOOM_LT_ABV: 
        return action.randoomBeers;

        case randoomBeersTypes.LOADD_RANDOOM_GT_ABV: 
        return action.randoomBeers;
            
            default:
            return randoomBeers;
    }
    
}

export default beersRandoomReducer
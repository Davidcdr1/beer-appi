import randoomBeersTypes from "../actions/randoomBeersTypes";

function beersRandoomReducer(randoomBeers =[], action) {

    let nextBeers = randoomBeers;
    switch(action.type) {
        case randoomBeersTypes.LOADD_RANDOOM_LT_ABV:
            nextBeers = action.randoomBeers
            break;
            
            default:
            return randoomBeers;
    }
    return nextBeers;
}

export default beersRandoomReducer
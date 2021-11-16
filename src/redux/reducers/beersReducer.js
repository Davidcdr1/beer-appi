import beerByNameTypes from "../actions/beerByNameTypes";

function beersReducer(beers =[], action) {

    let nextBeers = beers;
    switch(action.type) {
        case beerByNameTypes.LOAD_BEER_BY_NAME:
            nextBeers = action.beers
            break;
            
            default:
            return beers;
    }
    return nextBeers;
}

export default beersReducer
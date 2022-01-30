import homeBeersActionTypes from "../actions/homeBeersActionTypes";

function homeBeersReducer(beers = [], action) {
  switch (action.type) {
    case homeBeersActionTypes.LOAD_BEER_LIST:
      return action.beers;

    default:
      return beers;
  }
}

export default homeBeersReducer;
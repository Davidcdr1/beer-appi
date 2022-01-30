import homeBeersActionTypes from "./homeBeersActionTypes";
import axios from "axios";


export function loadBeers(page = 1, perPage = 10) {
  const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`;

  return async (dispatch) => {
    try {
      const { data } = await axios(url);

      dispatch({
        type: homeBeersActionTypes.LOAD_BEER_LIST,
        beers: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
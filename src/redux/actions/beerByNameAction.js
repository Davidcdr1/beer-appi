import axios from "axios";
import beerByNameTypes from "./beerByNameTypes";

export default function beersByName(name){
    //si se introduce una busqueda con mas de una palabra
    const cleanName = name.replace(" ", "_")
    const base = " https://api.punkapi.com/v2/beers";
    const url = `${base}?beer_name=${cleanName}`
    return async (dispatch) =>{

        const response = await axios(url);

        dispatch({
            type: beerByNameTypes.LOAD_BEER_BY_NAME,
            beers: response.data ?? [],
        })
    }
} 
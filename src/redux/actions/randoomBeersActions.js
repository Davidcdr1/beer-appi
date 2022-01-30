import axios from 'axios';
import randoomBeersTypes from "./randoomBeersTypes";

function getRandoomBeer(beers){
    return beers[Math.floor(Math.random() * beers.length)];
}

export function randoomBeersLtABV(){

    const punk_api = "https://api.punkapi.com/v2/beers";
    const min_abv = "0.6";

    const url = `${punk_api}?abv_lt=${min_abv}`

    return async (dispatch) => {

        try {
            const response = await axios(url)
            const randoomBeers = response.data
            if(!randoomBeers){
                throw new Error("no hay cerveza abv menor que " + min_abv )
            }
            dispatch({
                type: randoomBeersTypes.LOADD_RANDOOM_LT_ABV,
                randoomBeers,
            })
    
        }
        catch (error){
            dispatch({
                type: randoomBeersTypes.LOADD_RANDOOM_ERROR,
                error: error.message
            })
        }
        
       
    }


}

export function randoomBeersGtABV(){
    const punk_api = "https://api.punkapi.com/v2/beers";
    const max_abv = "0.6";
    

    const url = `${punk_api}?abv_gt=${max_abv}`

    return async (dispatch) => {

        try {
            const response = await axios(url)
            const randoomBeers = [getRandoomBeer(response.data)];
            console.log(randoomBeers)
            if(!randoomBeers){
                throw new Error("no hay cerveza abv mayor que " + max_abv )
            }
            dispatch({
                type: randoomBeersTypes.LOADD_RANDOOM_GT_ABV,
                randoomBeers,
            })
    
        }
        catch (error){
            dispatch({
                type: randoomBeersTypes.LOADD_RANDOOM_ERROR,
                error: error.message
            })
        }
        
       
    }


}
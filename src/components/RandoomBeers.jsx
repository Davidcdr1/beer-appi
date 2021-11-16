import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { useState } from 'react';
//import { useEffect } from 'react';
import randoomBeersLtABV from "../redux/actions/randoomBeersActions"


  function RandoomBeers() {
    const dispatch = useDispatch()
    const randoomBeers = useSelector(store => store.randoomBeers);
    
    // useEffect(() => {
    //      dispatch(randoomBeersLtABV());
        
    //   }, []);

    function handleClick(){
        dispatch()
    }

    return (
        <div>
            <div>
                <h1>Randoom Beer</h1>
            </div>
            
            <button type="button" onClick={()=> dispatch(randoomBeersLtABV())}>Randoom Beers</button>
            <ul>
            {
                randoomBeers.map(randoomBeer =><li>{randoomBeer.name}</li> )
            }
            </ul>
        </div>
    )
}

export default RandoomBeers;
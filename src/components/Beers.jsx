import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import beersByName from '../redux/actions/beerByNameAction';
import { useState } from 'react';


  function Beers() {
    const dispatch = useDispatch()
    const beers = useSelector(store => store.beers);
    const [searchName, setSearchName]  = useState("")

    function handleClick(){
        dispatch()
    }

    return (
        <div>
            <div>
                <h1>Search Beer</h1>
            </div>
            <input type="text" value={searchName} onChange={(event)=>{
                setSearchName(event.target.value)
            }}/>
            <button disabled={!searchName} onClick={()=> dispatch(beersByName(searchName))}>Load Beers</button>
            <ul>
            {
                beers.map(beer =><li>{beer.name}</li> )
            }
            </ul>
        </div>
    )
}

export default Beers;
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

import './Countries.css'

const Countries = () => {

    const[countries, setCountries] = useState([]);

    useEffect( () =>{

        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))

    } , [])

    return (
        <div>
           <div className='countries'>
            <h1 >Loading data of countries from JSOn placeholder</h1>
            <p>Number of Countries: {countries.length}</p>
           </div>
            {
                countries.map(country => <Country 
                    name={country.name.common} 
                    population={country.population}
                    area={country.area} >  </Country>)
            }
            
        </div>
    );
};




export default Countries;
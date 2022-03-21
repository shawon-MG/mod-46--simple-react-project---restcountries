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
           <div className='header'>
            <h1 >Loading data of countries from restcountries.com (RestAPI)</h1>
            <p>Number of Countries: {countries.length}</p>
           </div>
            <div className='countries-container'>
            {
                countries.map(country => <Country 
                    key={country.cca3}  /* for performance improvement */
                    name={country.name.common} 
                    population={country.population}
                    area={country.area}
                    img={country.flags.svg} >  </Country>)
            } 
            </div>

            
        </div>
    );
};




export default Countries;
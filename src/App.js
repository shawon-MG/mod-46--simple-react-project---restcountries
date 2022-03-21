import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}

      <Countries></Countries>
    </div>
  );
}
// Way-2:  Using different files for different components: (file structuring)







// Way-1:  All Components in one place: 
/* 
function LoadCountries(){

  const [countries, setCountries] = useState([]);

  useEffect(() =>{ 

    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))

   }, [])

  return (
    <div>
      <h1 style={{backgroundColor: 'gray', padding: '20px', border: '2px solid black', borderRadius: '50px'}}>Visiting all countries of the world</h1>

      {
        countries.map(country => <CountriesInfo name = {country.name.common} population = {country.population}></CountriesInfo>)
      }

    </div>
  )
}

function CountriesInfo(props){
  return (
    <div>
      <h2>Name: { props.name} </h2>
      <h3>Population: { props.population }</h3>
    </div>
  )
} 
*/

export default App;

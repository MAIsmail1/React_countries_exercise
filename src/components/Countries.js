import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    useEffect(
        ()  => {
              fetch(`https://restcountries.com/v3.1/all`)
              .then(response => response.json())
              .then(json => setCountries(json))
          }, []
      ) 
        
      const addNewVisitedCountry = (newCountry) => {
          if(!visitedCountries.includes(newCountry)){
            setVisitedCountries([...visitedCountries, newCountry])
            (countries.splice(countries.indexOf(newCountry), 1))
            setCountries([...countries])
        console.log("New Country Added!")
        } else {
            console.log("Already added!")
        }
      }
       

    return(
    <>
            <h2>Visited Countries</h2>
            <ul>{visitedCountries.map((country, index) => {
                return(
                <Country country={country} index={index} addNewVisitedCountry={addNewVisitedCountry} checked={true}/>
                
                )}
             )}
             </ul>
            <h2>All Countries</h2>
            <ul>{countries.map((country, index) => {
                return(
                <Country country={country} index={index} addNewVisitedCountry={addNewVisitedCountry} checked={false}/>
                
                )}
             )}
             </ul>
    
    </>
    
    );
               
}

export default Countries
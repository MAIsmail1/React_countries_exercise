import VisitedCountries from "./VisitedCountries"

const Country = (props) => {
    const handleButtonClick = (event) => {
        if(event.target.checked){
           props.addNewVisitedCountry(props.country)
        }
    }
    return(
    <li key = {props.index}>
            
                    {`Name: ${props.country.name.common}, Capital: ${props.country.capital}`}
                    <img className="flags" src={props.country.flags.png} alt="country flag" />
                    <input type="checkbox" checked = {props.checked} onClick ={handleButtonClick}/>
                    <label>Visited</label>


    </li> 
    )}

export default Country;
import React,{useState, useEffect} from 'react';
import { getAuthToken, getCountries, getStates, getCities } from "../../dataServices/countryInformation";
import { Button } from "../shared/Button";
import storage from "../../utils/storage";

export default function UserPersonalInfoForm({ onSubmit }) {
    const initialState = {
        email:'',
        nameSurname: '',
        description:'',
        country: '',
        state: '',
        city:'',
    }

    const [userFields, setUserFields] = useState(initialState);
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const { email, nameSurname, description, country, state, city } = userFields;
    
    useEffect(() => {
        getAuthToken()
            .then(value => storage.set('auth_token_countries',value.data.auth_token))
        getCountries((storage.get('auth_token_countries')))
            .then(response => setCountries(response.data));
    },[])

    const handleChange = event => {
        setUserFields(oldCredentials => ({
            ...oldCredentials,
            [event.target.name]: event.target.value,
        }));
    };

    const callStates = e => {
        getStates(e.target.value, (storage.get('auth_token_countries')))
            .then(response => setStates(response.data))
    }

    const callCities = e => {
        getCities(e.target.value, (storage.get('auth_token_countries')))
            .then(response => setCities(response.data))
    }

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(userFields);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className="formField-label"> Name & Surname
                <input className="formField-input" type="text" name="nameSurname" value={nameSurname} onChange={handleChange} required/>
            </label> 
            <label className="formField-label"> Email
                <input className="formField-input" type="email" name="email" value={email} onChange={handleChange} required/>
            </label> 
            <label className="formField-label"> Some words about you...
                <textarea className="formField-input" type="text" rows="4" cols="50" name="description" value={description} onChange={handleChange} required/>
            </label> 
            {
                countries.length > 0 ?
                    <select required name='country' value={country} onChange={e => {
                        handleChange(e); 
                        callStates(e)}}
                        > 
                        <option key='default-country' value='no select country'>Select Country</option> 
                        {countries.map(country => {
                            return <option key={country.country_short_name} value={country.country_name}>{country.country_name}</option>
                        })}
                    </select>
                    : null
            }
            {
                states.length > 0 ?
                    <select required name='state' value={state} onChange={e => {
                        handleChange(e); 
                        callCities(e)}}
                        > 
                        <option key='default-state' value='no select state'>Select State</option>
                        {states.map(state => {
                            return <option key={state.state_name} value={state.state_name}>{state.state_name}</option>
                        })}
                    </select>
                    : null
            }
            {
                cities.length > 0 ?
                    <select required name='city' value={city} onChange={handleChange}> 
                    <option key='default city' value='no select city'>Select City</option>
                        {cities.map(city => {
                            return <option key={city.city_name} value={city.city_name}>{city.city_name}</option>
                        })}
                    </select>
                    : null
            }
            <Button 
                type="submit"
                className="loginForm-submit"
                variant="primary"
                disabled={!nameSurname || !email || !description || !country || !state || !city}
            >
            SEND
            </Button>
        </form>
    );
}

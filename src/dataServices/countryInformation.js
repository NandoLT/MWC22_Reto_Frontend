const axios = require('axios');
const API_TOKEN = 'TWWCBjnfsXwxhRoWGS0_0MhheiOlx8Psl0iyH3EueZ9ruILwNUtd8sqJLd96ht7GGG8';
const API_EMAIL = 'fernando_lt@hotmail.es'
const baseURL = 'https://www.universal-tutorial.com/api';

export const getAuthToken = async () => {
    try {
        const value = await axios.get(`${baseURL}/getaccesstoken`, { 
            headers: {
                "api-token": API_TOKEN,
                "Accept": "application/json",
                "user-email": API_EMAIL
            }
        });

        return value;

    } catch (error) {
        console.log('ERROR', error);
    } 
}

export const getCountries = async (auth_token) => {
    try {
        const countries = await axios.get(`${baseURL}/countries/`, {
            headers: {
                "Authorization": `Bearer ${auth_token}`,
                "Accept": "application/json"
            }
        });

        return countries;
    } catch (error) {
        console.log('ERROR', error);
    }
}

export const getStates = async (nameCountry, auth_token) => {
    try {
        const states = await axios.get(`${baseURL}/states/${nameCountry}`, {
            headers: {
                "Authorization": `Bearer ${auth_token}`,
                "Accept": "application/json"
            }
        });
    
        return states;
    } catch (error) {
        console.log('ERROR', error);
    }
    
}

export const getCities = async (nameState, auth_token) => {
    const cities = await axios.get(`${baseURL}/cities/${nameState}`,{
        headers: {
            "Authorization": `Bearer ${auth_token}`,
            "Accept": "application/json"
        }
    });

    return cities
}
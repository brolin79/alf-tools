import axios from 'axios';
import { envVars } from '../helpers/envVars';


const { 
    VITE_API_URL_WEATHER,
    VITE_API_URL_EMOJIS,
    VITE_API_URL_GIFS,
    VITE_API_URL_ALF,
    VITE_API_URL_COUNTRY
} = envVars();

let apiUrl = '';


const generateApi = (api) => {

    const apiUrls = [
        { api: 'weather',   url: VITE_API_URL_WEATHER },
        { api: 'emojis',    url: VITE_API_URL_EMOJIS },
        { api: 'gifs',      url: VITE_API_URL_GIFS },
        { api: 'alf',       url: VITE_API_URL_ALF },
        { api: 'country',   url: VITE_API_URL_COUNTRY },
    ];

    const apiObject = apiUrls.find(apiObject => apiObject.api === api);
    apiUrl = apiObject ? apiObject.url : VITE_API_URL_WEATHER;

    return axios.create({
        baseURL: apiUrl
    });
};


export default generateApi;


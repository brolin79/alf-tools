import axios from 'axios';
import { envVars } from '../helpers/envVars';


const { 
    VITE_API_URL_WEATHER,
    VITE_API_URL_EMOJIS
} = envVars();

let apiUrl = '';

const generateApi = (api) => {

    const apiUrls = [
        { api: 'weather', url: VITE_API_URL_WEATHER },
        { api: 'emojis', url: VITE_API_URL_EMOJIS },
    ];

    const apiObject = apiUrls.find(apiObject => apiObject.api === api);
    apiUrl = apiObject ? apiObject.url : VITE_API_URL_WEATHER;

    return axios.create({
        baseURL: apiUrl
    });
};

export default generateApi;


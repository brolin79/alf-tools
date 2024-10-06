import axios from 'axios';
import { envVars } from '../helpers/envVars';

const { VITE_API_URL_WEATHER } = envVars();

const weatherApi = axios.create({
    baseURL: VITE_API_URL_WEATHER
});

/*
calendarApi.interceptors.request.use( config => {
    if( !config.headers['x-token'] ) {
        config.headers['x-token'] = localStorage.getItem('token') || '';
    }

    return config;
});
*/

export default weatherApi
import generateApi from "../api/generateApi";
import { envVars } from '../helpers/envVars';
import { ErrorClass } from "./errorClass";


const errorClass = new ErrorClass();

export class MiscClass {

    // llama a api de paises para recoger los valores de busqueda
    async countryInfo(search) {

        const url = `/name/${search}`;

        try {

            const api = generateApi("country");
            const response = await api.get(url);
            const resultado = response.data;

            return resultado;

        } catch (error) {
            console.log(error);
            errorClass.sendError(error, "countryInfo");
        }

    };

    // llama a api-bbdd de aeropuertos para recoger los valores de busqueda
    async airportInfo(search, type) {

        if (type === undefined) {
            type = '';
        }

        const action = 'get_aeropuertos';
        const { VITE_API_KEY_ALF } = envVars();
        const url = `/alftools-api.php?action=${action}&apikey=${VITE_API_KEY_ALF}&type=${type}&search=${search}`;

        try {

            const status = 'ok';
            const api = generateApi("alf");
            const response = await api.get(url);
            const datos = response.data.data;

            return { status, datos };

        } catch (error) {
            console.log(error);
            errorClass.sendError(error, "airportInfo");
        }

    };

    // llama a api de clima para recoger los valores de busqueda y los adecua
    async getWeather(latitude, longitude) {

        const url = `forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation_probability`;

        try {
            const api = generateApi("weather");
            const response = await api.get(url);
            const datos = response.data;

            const hourly = datos.hourly;
            const fechas = hourly.time;
            const temperaturas = hourly.temperature_2m;
            const probabilidades = hourly.precipitation_probability;

            const fechasUnicas = [...new Set(fechas.map(fecha => fecha.split('T')[0]))];

            const resultado = fechasUnicas.map(fecha => {
                const temperaturasDia = temperaturas.filter((temperaturas, index) => fechas[index].split('T')[0] === fecha);
                const probabilidadesDia = probabilidades.filter((probabilidades, index) => fechas[index].split('T')[0] === fecha);

                const temperaturaMedia = temperaturasDia.reduce((a, b) => a + b, 0) / temperaturasDia.length;
                const probabilidadMedia = probabilidadesDia.reduce((a, b) => a + b, 0) / probabilidadesDia.length;

                return {
                    fecha: fecha,
                    temperaturaMedia: temperaturaMedia.toFixed(0),
                    probabilidadMedia: probabilidadMedia.toFixed(0)
                };
            });

            return resultado;

        } catch (error) {
            console.log(error);
            errorClass.sendError(error, "getWeather");
        }
    }

    // llama a api de deepl para traducir un texto
    async deepl(source, target, text) {

        const { VITE_API_KEY_ALF } = envVars();
        const url = `/alftools-api.php`;
        const action = 'traduccion';

        try {

            const api = generateApi("alf");
            const response = await api.post(url, {
                action: action,
                apikey: VITE_API_KEY_ALF,
                source_lang: source,
                target_lang: target,
                text: text
            });

            return response.data;

        } catch (error) {
            console.log(error);
            errorClass.sendError(error, "deepl");
        }

    };

    // llama a api de monedas para recoger los valores de busqueda
    async currency(search) {

        const url = `/latest/${search}`;

        try {

            const api = generateApi("currency");
            const response = await api.get(url);
            const resultado = response.data;

            return resultado;

        } catch (error) {
            console.log(error);
            errorClass.sendError(error, "currency");
        }

    };

}
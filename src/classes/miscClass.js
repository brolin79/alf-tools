import  generateApi  from "../api/generateApi";
import { envVars } from '../helpers/envVars';
import { ErrorClass } from "./errorClass";


const errorClass = new ErrorClass(); 

export class MiscClass {


    async countryInfo (search)  {

        const url = `/name/${ search }`;

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


    async getWeather (latitude, longitude)  {

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

    
}
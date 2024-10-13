import { useDispatch, useSelector } from "react-redux"

import { onLoadWeather } from "../slices/miscSlice";
import  generateApi from "../../api/generateApi";


export const useMiscStore = () => {

    const dispatch = useDispatch();
    const { data } = useSelector(state => state.misc);


    const startWeather = async () => {

        const url = "/forecast?latitude=43.2957&longitude=-5.6842&hourly=temperature_2m,precipitation_probability";

        try {

            const weatherApi = generateApi("weather");
            const response = await weatherApi.get(url);
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

            dispatch(onLoadWeather({ resultado }));

        } catch (error) {
            console.log(error);
        }

    };

    return {
        // Propiedades
        data,
        // Metodos
        startWeather,
    }
}

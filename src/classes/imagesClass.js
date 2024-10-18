import  generateApi  from "../api/generateApi";
import { envVars } from '../helpers/envVars';
import { ErrorClass } from "./errorClass";


const errorClass = new ErrorClass(); 

export class ImagesClass {


    async searchEmojis (search)  {

        const { VITE_API_KEY_EMOJIS } = envVars();
        const url = `/emojis?search=${search}&access_key=${VITE_API_KEY_EMOJIS}`;

        try {

            const api = generateApi("emojis");
            const response = await api.get(url);
            const resultado = response.data;

            return resultado;

        } catch (error) {
            console.log(error);
            errorClass.sendError(error, "searchEmojis");
        }

    };


    async searchGifs (search)  {

        const { VITE_API_KEY_GIFS } = envVars();
        const url = `/gifs/random?api_key=${ VITE_API_KEY_GIFS }&tag=${ search }`;

        try {

            const api = generateApi("gifs");
            const response = await api.get(url);
            const datos = response.data.data;

            const randomGif = {
                id: datos.id,
                title: datos.title,
                url: datos.images.original.url
            };

            return randomGif;

        } catch (error) {
            console.log(error);
            errorClass.sendError(error, "searchGifs");
        }

    };
    
}
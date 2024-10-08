import { useDispatch, useSelector } from "react-redux"

import { onSearchEmojis, onSearchGifs, onError } from "../slices/imagesSlice";
import  generateApi from "../../api/generateApi";
import { envVars } from '../../helpers/envVars';


export const useImagesStore = () => {

    const { VITE_API_KEY_EMOJIS, VITE_API_KEY_GIFS } = envVars();

    const dispatch = useDispatch();
    const { data, status } = useSelector(state => state.images);


    const startSearchEmojis = async (search) => {

        const url = `/emojis?search=${search}&access_key=${VITE_API_KEY_EMOJIS}`;

        try {

            const emojisApi = generateApi("emojis");
            const response = await emojisApi.get(url);
            const datos = response.data;

            dispatch(onSearchEmojis({ datos }));

        } catch (error) {
            console.log(error);
            dispatch(onError({ error }));
        }

    };

    const startSearchGifs = async (search) => {

        const url = `/gifs/random?api_key=${ VITE_API_KEY_GIFS }&tag=${ search }`;

        try {

            const gifsApi = generateApi("gifs");
            const response = await gifsApi.get(url);
            const datos = response.data.data;

            const randomGif = {
                id: datos.id,
                title: datos.title,
                url: datos.images.original.url
            };

            dispatch(onSearchGifs({ randomGif }));
            

        } catch (error) {
            console.log(error);
            dispatch(onError({ error }));
        }

    };

    return {
        // Propiedades
        data,
        status,
        // Metodos
        startSearchEmojis,
        startSearchGifs
    }
}

import { useDispatch, useSelector } from "react-redux"

import { onSearchEmojis } from "../slices/imagesSlice";
import  generateApi from "../../api/generateApi";
import { envVars } from '../../helpers/envVars';


export const useImagesStore = () => {

    const { VITE_API_KEY_EMOJIS } = envVars();

    const dispatch = useDispatch();
    const { data } = useSelector(state => state.images);


    const startSearchEmojis = async (search) => {

        const url = `/emojis?search=${search}&access_key=${VITE_API_KEY_EMOJIS}`;

        try {

            const emojisApi = generateApi("emojis");
            const response = await emojisApi.get(url);
            const datos = response.data;

            dispatch(onSearchEmojis({ data: datos }));

        } catch (error) {
            console.log(error);
        }

    };

    return {
        // Propiedades
        data,
        // Metodos
        startSearchEmojis,
    }
}

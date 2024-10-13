import { useDispatch, useSelector } from "react-redux"

import { onGetData, onError } from "../slices/alfSlice";
import  generateApi from "../../api/generateApi";
import { envVars } from '../../helpers/envVars';


export const useAlfStore = () => {

    const { VITE_API_KEY_ALF } = envVars();

    const dispatch = useDispatch();
    const { data, status } = useSelector(state => state.apidb);


    const startGetData = async (action) => {

        const url = `/alftools-api.php?action=${action}&apikey=${VITE_API_KEY_ALF}`;

        try {

            const alfApi = generateApi("alf");
            const response = await alfApi.get(url);
            const datos = response.data;

            dispatch(onGetData({ datos }));

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
        startGetData,
    }
}

import  generateApi  from "../api/generateApi";
import { envVars } from '../helpers/envVars';
import { ErrorClass } from "./errorClass";


const errorClass = new ErrorClass();

export class AlfClass {

    
    async getNovedades ()  {

        const action = 'get_novedades';
        const { VITE_API_KEY_ALF } = envVars();
        const url = `/alftools-api.php?action=${action}&apikey=${VITE_API_KEY_ALF}`;
        
        try {

            const status = 'ok';
            const api = generateApi("alf");
            const response = await api.get(url);
            const datos = response.data.data;
            
            return { status, datos };

        } catch (error) {

            console.log(error);
            errorClass.sendError(error, "getNovedades");
        }
    };
    
}
import  generateApi  from "../api/generateApi";
import { envVars } from '../helpers/envVars';


export class ErrorClass {

    async sendError (error, funcion) { 

        const { VITE_API_KEY_ALF } = envVars();
        const url = `/alftools-api.php`;
        const action = 'save_log';

        try {

            const api = generateApi("alf");
            await api.post(url, {
                action: action,
                funcion: funcion,
                apikey: VITE_API_KEY_ALF,
                error_message: error
            });

        } catch (error) {
            console.log("Error al enviar el log: ", error);
        }

    };
    
}
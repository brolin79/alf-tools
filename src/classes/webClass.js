import generateApi from "../api/generateApi";
import { envVars } from '../helpers/envVars';
import { ErrorClass } from "./errorClass";


const errorClass = new ErrorClass();

export class WebClass {


    async ipInfo(ip, type) {

        try {

            if (type === 'search') {
                var url = `/${ip}/json/`;
            }else{
                var url = `/json/`;
            }

            const api = generateApi("ip");
            const response = await api.get(url);
            const resultado = response.data;

            return resultado;

        } catch (error) {
            console.log(error);
            errorClass.sendError(error, "ipInfo");
        }

    };

   
}
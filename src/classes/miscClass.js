import  generateApi  from "../api/generateApi";

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
        }

    };

    
}
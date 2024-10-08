import { useState, useEffect } from "react"
import { MainLayout } from "../../components/layout/MainLayout"
import { Card, CardLight } from "../../components/ui"
import { useImagesStore } from "../../store/hooks/useImagesStore";
import { SearchForm } from "../../components/uiForms/SearchForm";


export const GifsPage = () => {

    const { startSearchGifs, data, status } = useImagesStore();

    const [formValues, setFormValues] = useState({
        name: '',
    });

    const [gif, setGif] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {

        if (status === 'ko'){
            setError(true);
            return;  
        } else {
            setError(false);
            setGif(data);
        }
            
    }, [data])


    const onInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const { name } = formValues;

        if (name.trim().length < 2) return;
        
        await startSearchGifs(name);
    }

    return (

        <MainLayout>

            <div className="row">

                <CardLight >
                    Buscador de gifs
                </CardLight>

            </div>

            <div className="row">

                {
                    <Card col="12">
                        <div className="row">

                            <div className="col-4">

                                <h4 className="card-title">Buscar Gifs</h4>

                                <form className="form-inline" onSubmit={onSubmit}>

                                    <SearchForm name="name" placeholder="Alf" value={formValues.name} onInputChange={onInputChange} />
                                    
                                </form>

                            </div>

                            <div className="col-8">
                                <div className="row">

                                    <div className="alert alert-primary col-6" role="alert" hidden={!error}>
                                        No se encontraron resultados
                                    </div>


                                    <img src={gif?.url} alt={gif?.title} />
                                    

                                </div>
                            </div>

                        </div>
                    </Card>
                }
            </div>

        </MainLayout>
    )
}

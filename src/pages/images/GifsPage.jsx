import { useState } from "react"
import { MainLayout } from "../../components/layout/MainLayout"
import { Card, CardLight } from "../../components/ui"
import { SearchForm } from "../../components/uiForms/SearchForm";
import { ImagesClass } from "../../classes/imagesClass"


export const GifsPage = () => {

    const imagesClass = new ImagesClass();

    // datos iniciales
    const [gif, setGif] = useState([]);
    const [error, setError] = useState(false);

    // formulario
    const [formValues, setFormValues] = useState({
        name: '',
    });
    
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

        imagesClass.searchGifs(name)
            .then((data) => {
                if (data === null) {
                    setError(true);
                    return;
                }

                setGif(data);
            });
    }

    return (

        <MainLayout>

            <div className="row">

                <CardLight >
                    Buscador de gifs 🤹🏿‍♀️
                </CardLight>

            </div>

            <div className="row">

                {
                    <Card col="12">
                        <div className="row">

                            <div className="col-xl-4 col-sm-12">

                                <h4 className="card-title">Buscar Gifs</h4>

                                <form className="form-inline" onSubmit={onSubmit}>

                                    <SearchForm name="name" placeholder="Alf" value={formValues.name} onInputChange={onInputChange} />

                                </form>

                            </div>

                            <div className="col-xl-4 col-sm-12">
                                <div className="row">

                                    <div className="alert alert-primary col-6" role="alert" hidden={!error}>
                                        No se encontraron resultados
                                    </div>


                                    <img src={gif?.url} alt={gif?.title} className="col-12" />


                                </div>
                            </div>

                        </div>
                    </Card>
                }
            </div>

        </MainLayout>
    )

}

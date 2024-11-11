import { useState } from "react"
import { MainLayout } from "../../components/layout/MainLayout"
import { Card, CardLight, Spinner } from "../../components/ui"
import { SearchForm } from "../../components/uiForms/SearchForm";
import { createClient } from 'pexels';
import { Tooltip } from 'react-tooltip';
import { envVars } from '../../helpers/envVars';


export const PicturesPages = () => {

    // datos iniciales
    const [pictures, setPictures] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { VITE_API_KEY_PEXELS } = envVars();
    const client = createClient(VITE_API_KEY_PEXELS);

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

        setError(false);
        setLoading(true);

        const { name } = formValues;

        if (name.trim().length < 2) return;

        const query = name;

        client.photos.search({ query, per_page: 6 }).then(photos => {
            setLoading(false);
            setPictures(photos.photos);
        }).catch(error => {
            setLoading(false);
            console.log(error);
            setError(true);
        });
    }

    return (

        <MainLayout>

            <div className="row">

                <CardLight >
                    Buscador de imagenes 🖼️
                </CardLight>

            </div>

            <div className="row">
                {
                    <div className="col-xl-4 col-sm-12 mb-3">

                        <form className="form-inline" onSubmit={onSubmit}>

                            <div className="form-group mx-sm-3 mb-2">
                                <SearchForm name="name" placeholder="Naturaleza" value={formValues.name} onInputChange={onInputChange} />
                            </div>

                        </form>

                        {loading && <Spinner />}

                        {error && <div className="alert alert-danger">No se encontraron resultados</div>}

                    </div>
                }
            </div>

            {
                <div className="row">
                    {
                        pictures.map((picture) => (
                            <div key={picture.id} className="col-xl-6 col-sm-12 text-center">
                                <Card col="12" >
                                    <img src={picture.src.medium} alt={picture.photographer} className="img-fluid mb-2" />
                                    <p style={{ display: 'flex', alignItems: 'center' }}>
                                        <span className="font-weight-bold mr-2">{picture.photographer}</span>
                                        <i
                                            className="mdi mdi-information-outline anchor-tooltip"
                                            data-tooltip-id="anchor-tooltip"
                                            data-tooltip-content={picture.alt}
                                            data-tooltip-place="right"
                                            style={{ fontSize: '1.5em' }}>
                                        </i>
                                    </p>
                                    <a href={picture.src.original} className="btn btn-primary" target="_blank" rel="noreferrer">
                                        Tamaño Original
                                    </a>
                                </Card>
                            </div>
                        ))
                    }
                    <Tooltip anchorSelect=".anchor-tooltip" style={{ backgroundColor: '#4178BC' }} />
                </div>
            }

        </MainLayout>
    )

}

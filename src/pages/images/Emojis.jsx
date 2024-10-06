import { useState, useEffect } from "react"
import { MainLayout } from "../../components/layout/MainLayout"
import { Card, CardLight } from "../../components/ui"
import { useImagesStore } from "../../store/hooks/useImagesStore";


export const Emojis = () => {

    const { startSearchEmojis, data } = useImagesStore();

    const [formValues, setFormValues] = useState({
        name: '',
    });

    const [emojis, setEmojis] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {

        if (data === null) return;

        if (data && data.data.status == "error") {
            setError(true);
            setEmojis([]);
        } else {
            setError(false);
            setEmojis(data.data);
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

        if (name.trim().length < 2) {
            return;
        }

        await startSearchEmojis(name);
    }


    return (

        <MainLayout>

            <div className="row">

                <CardLight >
                    Buscador de emojis
                </CardLight>

            </div>

            <div className="row">

                {

                    /* formulario con icono de busqueda incorporado */
                    <Card col="12">

                        <div className="row">

                            <div className="col-4">

                                <h4 className="card-title">Buscar Emojis (en ingles)</h4>

                                <form className="form-inline" onSubmit={onSubmit}>

                                    <div className="form-group">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                placeholder="Happy Face"
                                                value={formValues.name}
                                                onChange={onInputChange}
                                            />
                                            <div className="input-group-append">
                                                <button className="btn btn-sm btn-primary" type="submit">
                                                    <i className="mdi mdi-magnify"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </form>

                            </div>

                            <div className="col-8">

                                <div className="row">

                                    <div className="alert alert-primary col-6" role="alert" hidden={!error}>
                                        No se encontraron resultados
                                    </div>

                                    {
                                        emojis.map((emoji) => (
                                            <div key={emoji.slug} className="col-2">

                                                <a href="#" onClick={() => {
                                                    navigator.clipboard.writeText(emoji.character);
                                                }} style={{ fontSize: '2rem' }}>
                                                    {emoji.character}
                                                </a>

                                            </div>
                                        ))
                                    }

                                </div>


                            </div>

                        </div>

                    </Card>

                }

            </div>

        </MainLayout>
    )
}

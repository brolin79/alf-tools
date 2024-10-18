import { useState } from "react"
import { MainLayout } from "../../components/layout/MainLayout"
import { Card, CardLight } from "../../components/ui"
import { Tooltip } from 'react-tooltip';
import { SearchForm } from "../../components/uiForms/SearchForm";
import { ImagesClass } from "../../classes/imagesClass";


export const EmojisPage = () => {

    const imagesClass = new ImagesClass();

    const [formValues, setFormValues] = useState({
        name: '',
    });

    const [emojis, setEmojis] = useState([]);
    const [error, setError] = useState(false);


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

        imagesClass.searchEmojis(name)
            .then((data) => {
                if (data === null) return;

                if (data && data.status == "error") {
                    setError(true);
                    setEmojis([]);
                } else {
                    setError(false);
                    setEmojis(data);
                }
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            });
    }

    return (

        <MainLayout>

            <div className="row">

                <CardLight >
                    Buscador de emojis 😍
                </CardLight>

            </div>

            <div className="row">

                {
                    <Card col="12">
                        <div className="row">

                            <div className="col-xl-4 col-sm-12">

                                <h4 className="card-title">Buscar Emojis (en ingles)</h4>

                                <form className="form-inline" onSubmit={onSubmit}>

                                    <SearchForm name="name" placeholder="Happy Face" value={formValues.name} onInputChange={onInputChange} />

                                </form>

                            </div>

                            <div className="col-xl-8 col-sm-12">
                                <div className="row">

                                    <div className="alert alert-primary col-xl-6 col-sm-12" role="alert" hidden={!error}>
                                        No se encontraron resultados
                                    </div>

                                    {
                                        (emojis.length > 0) &&
                                        emojis.map((emoji) => (
                                            <div key={emoji.slug} className="col-2">
                                                <a href="#/" className="anchor-tooltip" onClick={() => {
                                                    navigator.clipboard.writeText(emoji.character);
                                                }} style={{ fontSize: '2rem' }}>
                                                    {emoji.character}
                                                </a>
                                            </div>
                                        ))
                                    }

                                    <Tooltip anchorSelect=".anchor-tooltip" style={{ backgroundColor: '#4178BC' }} content={"Copiado al portapapeles"} events={["click"]} />

                                </div>
                            </div>

                        </div>
                    </Card>
                }
            </div>

        </MainLayout>
    )

}

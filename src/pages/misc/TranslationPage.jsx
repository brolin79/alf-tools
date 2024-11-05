import { useState, useEffect } from "react"
import { MainLayout } from "../../components/layout/MainLayout"
import { Card, CardLight } from "../../components/ui"
import { MiscClass } from "../../classes/miscClass"

export const TranslationPage = () => {

    const miscClass = new MiscClass();

    // datos iniciales
    //const [dataPaises, setDataPaises] = useState([]);
    //const [infoPais, setInfoPais] = useState([]);

    // formulario
    const [formValues, setFormValues] = useState({
        texto: ''
    });
    
    const onInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const { texto } = formValues;

        if (texto.trim().length < 10) return;

        const info = await miscClass.deepl('ES', 'EN', texto);
        if (info) {
            console.log(info);
        }
    }


    return (

        <MainLayout>

            <div className="row">

                <CardLight >
                    Traduce tu texto a otro idioma 🌍
                </CardLight>

            </div>

            <div className="row">

                <div className="col-xl-6 col-sm-12 mb-3">

                    <textarea
                        className="form-control"
                        rows="10"
                        placeholder="Escribe algo..."
                        name="texto"
                        value={formValues.texto}
                        onChange={onInputChange}
                        maxLength={500}
                    />

                </div>

                <div className="col-xl-6 col-sm-12 mb-3">

                    <textarea
                        className="form-control"
                        rows="10"
                        placeholder=""
                        readOnly
                    />

                </div>

                <div className="col-xl-6 col-sm-12 mb-3">
                    <button className="btn btn-primary" onClick={onSubmit}>Traducir</button>
                </div>

            </div>


        </MainLayout >
    )
}

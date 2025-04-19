import { useState, useEffect } from "react"
import { MainLayout } from "../../components/layout/MainLayout"
import { Card, CardLight } from "../../components/ui"
import { MiscClass } from "../../classes/miscClass"
import { Spinner } from "../../components/ui"

export const IaPage = () => {

    const miscClass = new MiscClass();

    // datos iniciales
    const [peticion, setPeticion] = useState('');
    const [loading, setLoading] = useState(false);

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

        setLoading(true);
        try {
            const info = await miscClass.google_ai(texto);
            if (info) {
                setPeticion(info);
                const respuestaDiv = document.getElementById('respuesta');
                respuestaDiv.style.display = 'block';
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const onTransfer = () => {
        setFormValues({
            ...formValues
        })
    }

    return (

        <MainLayout>

            <div className="row">

                <CardLight >
                    Consulta tus dudas con una IA 🤖
                </CardLight>

            </div>

            <div className="row">

                <div className="col-xl-5 col-sm-12 mb-3">

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

                <div className="col-xl-1 col-sm-12 d-flex justify-content-center align-items-center mb-3">
                    <button className="btn btn-primary" onClick={onSubmit}>Consultar</button>
                </div>


            </div>

            {loading && <Spinner />}

            <div className="row">
                {/* Mostrar la respuesta */}
                <div className="col-xl-12 col-sm-12 mb-3">
                    <div style={{ border: '1px solid #336699', padding: '10px', borderRadius: '5px', display: 'none'}} id='respuesta'>
                            {peticion && <p dangerouslySetInnerHTML={{__html: peticion.replace(/\n/g, "<br />")}}></p>}
                    </div>
                </div>

            </div>

        </MainLayout >
    )
}

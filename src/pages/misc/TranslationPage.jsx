import { useState, useEffect } from "react"
import { MainLayout } from "../../components/layout/MainLayout"
import { Card, CardLight } from "../../components/ui"
import { MiscClass } from "../../classes/miscClass"
import { Spinner } from "../../components/ui"

export const TranslationPage = () => {

    const miscClass = new MiscClass();

    // datos iniciales
    const [traduccion, setTraduccion] = useState('');
    const [loading, setLoading] = useState(false);

    // formulario
    const [formValues, setFormValues] = useState({
        texto: '',
        source_lang: 'ES',
        target_lang: 'EN'
    });

    const onInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const { texto, source_lang, target_lang } = formValues;

        if (texto.trim().length < 10) return;

        setLoading(true);
        try {
            const info = await miscClass.deepl(source_lang, target_lang, texto);
            if (info) {
                setTraduccion(info.translations[0].text);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const onTransfer = () => {
        setFormValues({
            ...formValues,
            source_lang: formValues.target_lang,
            target_lang: formValues.source_lang
        })
    }

    return (

        <MainLayout>

            <div className="row">

                <CardLight >
                    Traduce tu texto a otro idioma 🌍
                </CardLight>

            </div>

            <div className="row">

                <div className="col-xl-5 col-sm-12 mb-3">

                    <select
                        className="form-control mb-3"
                        name="source_lang"
                        value={formValues.source_lang}
                        onChange={onInputChange}
                    >
                        <option value="ES">Español</option>
                        <option value="EN">Inglés</option>
                        <option value="FR">Francés</option>
                        <option value="DE">Alemán</option>
                        <option value="IT">Italiano</option>
                        <option value="PT">Portugués</option>
                        <option value="EL">Griego</option>
                        <option value="RU">Ruso</option>
                        <option value="PL">Polaco</option>
                        <option value="SV">Sueco</option>
                        <option value="ZH">Chino</option>
                    </select>

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

                <div className="col-xl-1 col-sm-12 d-flex justify-content-center align-items-start mb-3">
                    <button type="button" className="btn btn-link mt-0" onClick={onTransfer}>
                        <i className="mdi mdi-swap-horizontal"></i>
                    </button>
                </div>

                <div className="col-xl-5 col-sm-12 mb-3">

                    <select
                        className="form-control mb-3"
                        name="target_lang"
                        value={formValues.target_lang}
                        onChange={onInputChange}
                    >
                        <option value="EN">Inglés</option>
                        <option value="ES">Español</option>
                        <option value="FR">Francés</option>
                        <option value="DE">Alemán</option>
                        <option value="IT">Italiano</option>
                        <option value="PT">Portugués</option>
                        <option value="EL">Griego</option>
                        <option value="RU">Ruso</option>
                        <option value="PL">Polaco</option>
                        <option value="SV">Sueco</option>
                        <option value="ZH">Chino</option>
                    </select>

                    <textarea
                        className="form-control"
                        rows="10"
                        placeholder=""
                        value={traduccion}
                        readOnly
                    />

                </div>

                <div className="col-xl-1 col-sm-12 d-flex justify-content-center align-items-center mb-3">
                    <button className="btn btn-primary" onClick={onSubmit}>Traducir</button>
                </div>

            </div>

            {loading && <Spinner />}

        </MainLayout >
    )
}

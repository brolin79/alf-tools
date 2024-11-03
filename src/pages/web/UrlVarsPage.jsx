import { useState, useEffect } from "react"
import { MainLayout } from "../../components/layout/MainLayout"
import { Card, CardLight } from "../../components/ui"


export const UrlVarsPage = () => {

    // datos iniciales
    const [info, setInfo] = useState(false);
    const [urlVars, setUrlVars] = useState([]);


    const [formValues, setFormValues] = useState({
        url: ''
    });

    
    const onInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const { url } = formValues;
        if (url.trim().length < 2) return;

        // split url
        const urlVars = decodeURI(url).split('?');
        const urlVars2 = urlVars[1].split('&');
        const urlVars3 = urlVars2.map(urlVar => urlVar.split('='));

        setUrlVars(urlVars3);
        setInfo(true);
    }


    return (

        <MainLayout>

            <div className="row">

                <CardLight >
                    Extraer Variables de URL 🧲
                </CardLight>

            </div>

            <div className="row mb-3">

                <div className="col-xl-1 col-sm-12 mt-1">
                    <label className="form-label">Ruta:</label>
                </div>

                <div className="col-xl-6 col-sm-12">
                    
                    <input
                        type="text"
                        className="form-control"
                        placeholder="https://www.google.com/maps/search/?api=1&query=40.714224,-73.961452"
                        name="url"
                        onChange={onInputChange}
                    />

                </div>

                <div className="col-xl-3 col-sm-12 mt-1">
                    <button
                        className="btn btn-primary"
                        onClick={onSubmit}
                    >
                        Extraer
                    </button>
                </div>

                

            </div>


            <div className="row" style={{ display: info ? "block" : "none" }} >


                <Card col="8">

                    <p className="text-primary">Url: {info}</p>

                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Parámetro</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    urlVars ? urlVars.map(urlVar => (
                                        <tr key={urlVar[0]}>
                                            <td>{urlVar[0]}</td>
                                            <td>{urlVar[1]}</td>
                                        </tr>
                                    ))
                                    : null
                                }
                            </tbody>
                        </table>
                    </div>

                </Card>

            </div>


        </MainLayout >
    )
}

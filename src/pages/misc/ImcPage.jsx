import { useState } from "react"
import { MainLayout } from "../../components/layout/MainLayout"
import { Card, CardLight } from "../../components/ui"

export const ImcPage = () => {

    // datos iniciales
    const [info, setInfo] = useState([]);
    const [color, setColor] = useState('');

    // formulario
    const [formValues, setFormValues] = useState({
        altura: '',
        peso: '',
    });

    const onInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };


    const onSubmit = async (e) => {
        e.preventDefault();

        const { altura, peso } = formValues;
        if (altura.trim().length < 2 || peso.trim().length < 2) return;
        
        const alturaMetros = parseFloat(altura) / 100;
        const info = parseFloat(peso) / (alturaMetros * alturaMetros);

        if (info >= 30.0) setColor('badge badge-danger');
        else if (info >= 18.5 && info < 24.9) setColor('badge badge-success');
        else setColor('badge badge-warning');

        console.log(info.toFixed(2));
        setInfo(info.toFixed(2));
    }


    return (

        <MainLayout>

            <div className="row">

                <CardLight >
                    Calcula tu indice de masa corporal 🍔
                </CardLight>

            </div>

            <div className="row">

                <div className="col-xl-2 col-sm-12 mb-3">
                    <div className="form-group">
                        <div className="input-group">
                            <input
                                type="number"
                                className="form-control"
                                id="altura"
                                name="altura"
                                placeholder="altura"
                                value={formValues.altura}
                                onChange={onInputChange}
                            />
                            <div className="input-group-append">
                                <span className="input-group-text">cm</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-2 col-sm-12 mb-3">
                    <div className="form-group">
                        <div className="input-group">
                            <input
                                type="number"
                                className="form-control"
                                id="peso"
                                name="peso"
                                placeholder="peso"
                                value={formValues.peso}
                                onChange={onInputChange}
                            />
                            <div className="input-group-append">
                                <span className="input-group-text">kg</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-1 col-sm-12 d-flex justify-content-center align-items-center mb-3">
                    <button className="btn btn-primary" onClick={onSubmit}>Calcular</button>
                </div>

                <div className="col-xl-2 col-sm-12 d-flex justify-content-center align-items-center mb-3">
                    {info && <span className={color} style={{ fontSize: "2rem" }}>{info}</span>}
                </div>

            </div>

            <div className="row">

                <div className="col-xl-2 col-sm-12 mb-3">

                    <table className="table" style={{ color: "white" }} >
                        <tbody>
                            <tr className="bg-warning">
                                <td>Bajo peso</td>
                                <td>Menos <strong>18,5</strong></td>
                            </tr>
                            <tr className="bg-success">
                                <td>Normal</td>
                                <td><strong>18,5 - 24,9</strong></td>
                            </tr>
                            <tr className="bg-warning">
                                <td>Sobrepeso</td>
                                <td><strong>25,0 - 29,9</strong></td>
                            </tr>
                            <tr className="bg-danger">
                                <td>Obesidad I</td>
                                <td><strong>30,0 - 34,9</strong></td>
                            </tr>
                            <tr className="bg-danger">
                                <td>Obesidad II</td>
                                <td><strong>35,0 - 39,9</strong></td>
                            </tr>
                            <tr className="bg-danger">
                                <td>Obesidad III</td>
                                <td><strong>Mayor 40</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </MainLayout >
    )
}

import { useState, useEffect } from "react"
import { MainLayout } from "../../components/layout/MainLayout"
import { Card, CardLight } from "../../components/ui"
import { WebClass } from "../../classes/webClass"
import { checkIp } from "../../helpers/common"


export const IpInfoPage = () => {

    // datos iniciales
    const webClass = new WebClass();

    const [ipIni, setIpIni] = useState('');
    const [ipInfo, setIpInfo] = useState([]);
    const [error, setError] = useState(false);


    useEffect(() => {
        webClass.ipInfo()
            .then(response => {
                setIpIni(response.ip);
                setIpInfo(response);
            })
    }, []);


    const [formValues, setFormValues] = useState({
        ip: ''
    });

    const onInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const { ip } = formValues;
        if (ip.trim().length < 6) return;

        // revisar es una ip valida
        if (!checkIp(ip)) {
            setError(true);
            return;
        }else{
            setError(false);
            webClass.ipInfo(ip, "search")
                .then(response => {
                    setIpInfo(response);
            })
        }


    }


    return (

        <MainLayout>

            <div className="row">

                <CardLight >
                    Información sobre una IP 🌐
                </CardLight>

            </div>

            <div className="row mb-3">

                <div className="col-xl-1 col-sm-12 mt-1">
                    <label className="text-primary">Tu IP:</label>
                </div>

                <div className="col-xl-4 col-sm-12">
                    
                    <input
                        type="text"
                        className="form-control"
                        placeholder={ipIni}
                        name="ip"
                        onChange={onInputChange}
                    />

                </div>

                <div className="col-xl-1 col-sm-12 mt-1">
                    <button
                        className="btn btn-primary"
                        onClick={onSubmit}
                    >
                        Enviar
                    </button>
                </div>

                <div className="col-xl-3 col-sm-12 mt-1">
                    {error && (
                        <div className="alert alert-danger">Por favor ingresa una IP válida</div>
                    )}
                </div>

            </div>


            <div className="row" >


                <Card col="6">

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
                                    Object.entries(ipInfo).map(([key, value]) => (
                                        <tr key={key}>
                                            <td>{key}</td>
                                            <td>{value}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                </Card>

            </div>


        </MainLayout >
    )
}

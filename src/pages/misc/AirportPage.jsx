import { useState, useEffect } from "react"
import { MainLayout } from "../../components/layout/MainLayout"
import { Card, CardLight } from "../../components/ui"
import { paises } from "../../data/paisesSeeder"
import { MiscClass } from "../../classes/miscClass"
import { AutocompleteInput } from "../../components/ui/Autocomplete"


export const AirportPage = () => {

    const miscClass = new MiscClass();


    // datos iniciales
    const [dataPaises, setDataPaises] = useState([]);
    const [infoPais, setInfoPais] = useState('');
    const [infoIata, setInfoIata] = useState([]);
    const [infoData, setInfoData] = useState(false);


    const [formValues, setFormValues] = useState({
        iata: ''
    });

    useEffect(() => {
        if (paises) {
            setDataPaises(paises);
        } else {
            setError(true);
        }
    }, []);

    
    const onInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const { iata } = formValues;

        if (iata.trim().length < 2) return;

        const info = await miscClass.airportInfo(iata, infoPais.iso);
        if (info) {
            setInfoIata(info.datos);
            setInfoData(true);
        }
    }

    // estados para el desplegable
    const handleSelect = async (pais) => {
        setInfoPais(pais);
    };


    return (

        <MainLayout>

            <div className="row">

                <CardLight >
                    Buscar un aeropuerto ✈️
                </CardLight>

            </div>

            <div className="row mb-3">

                <div className="col-xl-3 col-sm-12">

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar por iata, nombre..."
                        name="iata"
                        onChange={onInputChange}
                    />

                </div>

                <div className="col-xl-3 col-sm-12">

                    <AutocompleteInput
                        placeholder="Filtrar por pais"
                        data={dataPaises}
                        onSelect={handleSelect}
                        displayKey="nombre"
                        valueKey="iso"
                        filterFunction={(pais, value) =>
                            pais.nombre.toLowerCase().includes(value.toLowerCase())
                        }
                    />

                </div>

                <div className="col-xl-3 col-sm-12 mt-1">
                    <button
                        className="btn btn-primary"
                        onClick={onSubmit}
                    >
                        Buscar
                    </button>
                </div>

                

            </div>


            <div className="row" style={{ display: infoData ? "block" : "none" }} >


                <Card col="12">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Iata</th>
                                    <th>Nombre</th>
                                    <th>Cod. Pais</th>
                                    <th>Ciudad</th>
                                    <th>Mapa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    infoIata ? infoIata.map((info, index) => (
                                        <tr key={index}>
                                            <td>{info.iata}</td>
                                            <td>{info.nombre}</td>
                                            <td>{info.countrycode}</td>
                                            <td>{info.ciudad}</td>
                                            <td>
                                                <a href={`https://www.google.com/maps/search/?api=1&query=${info.latitud},${info.longitud}`} target="_blank">
                                                    <span className="mdi mdi-map-marker-radius" style={{ fontSize: "2rem", verticalAlign: "middle" }}></span>
                                                </a>
                                            </td>
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

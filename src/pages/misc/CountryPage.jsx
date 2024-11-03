import { useState, useEffect } from "react"
import { MainLayout } from "../../components/layout/MainLayout"
import { Card, CardLight } from "../../components/ui"
import { paises } from "../../data/paisesSeeder"
import { MiscClass } from "../../classes/miscClass"
import { AutocompleteInput } from "../../components/ui/Autocomplete"


export const CountryPage = () => {

    const miscClass = new MiscClass();

    // datos iniciales
    const [dataPaises, setDataPaises] = useState([]);
    const [infoPais, setInfoPais] = useState([]);

    useEffect(() => {
        if (paises) {
            setDataPaises(paises);
        } else {
            setError(true);
        }
    }, []);


    // estados para el desplegable
    const handleSelect = async (pais) => {
        const paisInfo = await miscClass.countryInfo(pais.name);
        setInfoPais(paisInfo);
    };


    return (

        <MainLayout>

            <div className="row">

                <CardLight >
                    Buscar información de un pais 🏴‍☠️
                </CardLight>

            </div>

            <div className="row">

                <div className="col-xl-6 col-sm-12 mb-3">

                    <AutocompleteInput
                        placeholder="Escribe el nombre de un país"
                        data={dataPaises}
                        onSelect={handleSelect}
                        displayKey="nombre"
                        valueKey="name"
                        filterFunction={(pais, value) =>
                            pais.nombre.toLowerCase().includes(value.toLowerCase())
                        }
                    />

                </div>

            </div>


            <div className="row" >

                {
                    (infoPais) ?
                        infoPais.map((info, index) => (

                            <Card col="6" key={index}>

                                <h3 className="text-center">
                                    {Object.values(info.name.nativeName).map((name, index) => (
                                        <span key={index}> {name.official} </span>
                                    ))}
                                </h3>
                                <p className="text-center"><img className="img-fluid" src={info.flags.png} /></p>

                                <div className="row">
                                    <div className="col-6 col-xl-3">
                                        <h6 className="mb-2">Capital</h6>
                                    </div>
                                    <div className="col-6 col-xl-6">
                                        <p className="text-primary ml-2 mb-2">
                                            {info.capital}
                                        </p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-6 col-xl-3">
                                        <h6 className="mb-2">Country Code</h6>
                                    </div>
                                    <div className="col-6 col-xl-6">
                                        <p className="text-primary ml-2 mb-2">
                                            | {info.cca2} | {info.cca3} |
                                        </p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-6 col-xl-3">
                                        <h6 className="mb-2">Monedas</h6>
                                    </div>
                                    <div className="col-6 col-xl-6">
                                        <p className="text-primary ml-2 mb-2">
                                            {Object.values(info.currencies).map((currency, index) => (
                                                <span key={index}> | {currency.name} ({currency.symbol}) | </span>
                                            ))}
                                        </p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-6 col-xl-3">
                                        <h6 className="mb-2">Timezones</h6>
                                    </div>
                                    <div className="col-6 col-xl-6">
                                        <p className="text-primary ml-2 mb-2">
                                            {info.timezones.map((timezone, index) => (
                                                <span key={index}> | {timezone} | </span>
                                            ))}
                                        </p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-6 col-xl-3">
                                        <h6 className="mb-2">Longitud / Latidud</h6>
                                    </div>
                                    <div className="col-6 col-xl-6">
                                        <p className="text-primary ml-2 mb-2">
                                            {info.latlng.map((coord, index) => (
                                                <span key={index}>  | {coord.toFixed(2)} |  </span>
                                            ))}
                                        </p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-6 col-xl-3">
                                        <h6 className="mb-2">Google Maps</h6>
                                    </div>
                                    <div className="col-6 col-xl-6">
                                        <p className="text-primary ml-2 mb-2">
                                            <a href={info.maps.googleMaps} target="_blank" rel="noopener noreferrer"> {info.maps.googleMaps}</a>
                                        </p>
                                    </div>
                                </div>

                            </Card>

                        ))
                        : null
                }

            </div>


        </MainLayout >
    )
}

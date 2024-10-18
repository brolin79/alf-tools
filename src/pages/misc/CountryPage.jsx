import { useState, useEffect } from "react"
import { MainLayout } from "../../components/layout/MainLayout"
import { Card, CardLight } from "../../components/ui"
import { paises } from "../../data/paisesSeeder"
import { MiscClass } from "../../classes/miscClass"


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
    const [inputValue, setInputValue] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        // Filtrar los países basados en el input
        if (value) {
            const filtered = dataPaises.filter((pais) =>
                pais.nombre.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredCountries(filtered);
        } else {
            setFilteredCountries([]);
        }
    };

    const handleSelect = async (nombre, name) => {
        setInputValue(nombre);
        setFilteredCountries([]);

        const pais = await miscClass.countryInfo(name);
        setInfoPais(pais);
    };


    return (

        <MainLayout>

            <div className="row">

                <CardLight >
                    Buscar información de un pais 🏴‍☠️
                </CardLight>

            </div>

            <div className="row">

                <div className="form-group position-relative col-13 col-xl-6" >
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Escribe el nombre de un país"
                        value={inputValue}
                        onChange={handleInputChange}
                        style={{ borderRadius: '5px' }}
                    />
                    {filteredCountries.length > 0 && (
                        <ul className="list-group position-absolute w-100 bg-dark text-white" style={{ zIndex: 1, maxHeight: '200px', overflowY: 'auto' }}>
                            {filteredCountries.map((pais) => (
                                <li
                                    key={pais.name}
                                    className="list-group-item list-group-item-action text-white bg-dark"
                                    onClick={() => handleSelect(pais.nombre, pais.name)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {pais.nombre}
                                </li>
                            ))}
                        </ul>
                    )}
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

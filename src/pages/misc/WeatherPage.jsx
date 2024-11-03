import { useEffect, useState } from "react"
import { MainLayout } from "../../components/layout/MainLayout"
import { Card, CardLight } from "../../components/ui"
import { WeatherTool } from "../../components/tools/Weather"
import { MiscClass } from "../../classes/miscClass"
import { AlfClass } from "../../classes/alfClass"
import Modal from "react-modal"
import { customStyles } from "../../data/customStyles"
import { SearchForm } from "../../components/uiForms/SearchForm"


Modal.setAppElement('#root');

export const WeatherPage = () => {

    const miscClass = new MiscClass();
    const alfClass = new AlfClass();

    const [data, setData] = useState([]);
    const [dataCiudad, setDataCiudad] = useState([]);
    const [error, setError] = useState(false);
    const [modalButton, setModalButton] = useState(false);
    const [ciudadActual, setCiudadActual] = useState("Langreo");
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        // langreo por defecto
        miscClass.getWeather("43.2957", "-5.6842")
            .then(data => setData(data))
    }, []);

    // modal
    const onCloseModal = () => {
        setIsModalOpen(false);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const onSearch = (e) => {
        e.preventDefault();

        const { search } = formValues;

        if (search.trim().length < 3) return;

        setDataCiudad([]);

        alfClass.getCiudadesMundo(search)
            .then((data) => {
                if (data === null) return;

                setDataCiudad(data.datos);
                setModalButton(true);
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            });
    }

    // formulario modal
    const [formValues, setFormValues] = useState({
        search: '',
        ciudad: '',
    });

    const onInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const { ciudad } = formValues;
        if (ciudad.trim().length < 3) return;

        const [ciudadActual, latitud, longitud] = ciudad.split('/');

        setCiudadActual(ciudadActual);
        miscClass.getWeather(latitud, longitud)
            .then(data => setData(data))

        setIsModalOpen(false);
    }

    return (

        <MainLayout>

            <div className="row">

                <CardLight >
                    <span>Tiempo en {ciudadActual} 🌞</span>
                    <a href="#/" className="btn btn-outline-light btn-rounded get-started-btn ml-2" onClick={openModal}>Cambiar ubicación</a>
                </CardLight>

            </div>

            {
                (data) ?
                    <div className="row">
                        <WeatherTool data={data} />
                    </div>
                    : null
            }

            <Modal
                isOpen={isModalOpen}
                onRequestClose={onCloseModal}
                style={customStyles}
                className={'modal'}
                overlayClassName={'modal-fondo'}

            >
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="modal-title"> Cambiar Ciudad </h2>
                    <button className="btn btn-outline-secondary" onClick={onCloseModal}>
                        <i className="mdi mdi-close"></i>
                    </button>
                </div>


                <form onSubmit={onSearch} className="mt-4">
                    <SearchForm
                        name="search"
                        placeholder="Buscar una Ciudad"
                        value={formValues.search}
                        onInputChange={onInputChange}
                    />
                </form>

                <div className="mt-4">

                    {
                        (dataCiudad) ?
                            dataCiudad.map((ciudad, index) => (
                                <div className="form-check" key={ciudad.nombre}>
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="ciudad"
                                        id={ciudad.ubicacion}
                                        value={ciudad.ubicacion}
                                        checked={ciudad.ubicacion === formValues.ciudad}
                                        onChange={onInputChange}
                                    />
                                    <label htmlFor={ciudad.ubicacion} className="form-check-label">
                                        {ciudad.nombre}
                                    </label>
                                </div>
                            ))
                            : null

                    }

                    {modalButton &&
                        <button onClick={onSubmit} className="btn btn-primary mt-2" style={{ width: '100%' }}>
                            <i className="mdi mdi-content-save-all"></i>
                            <span> Aceptar</span>
                        </button>
                    }

                </div>

            </Modal>

        </MainLayout>
    )
}

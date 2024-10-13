import { useEffect, useState } from "react"
import { MainLayout } from "../components/layout/MainLayout"
import { CardNews, CardLight } from "../components/ui"
import { useAlfStore } from "../store/hooks/useAlfStore"


export const HomePage = () => {

    
    const { startGetData, data, status } = useAlfStore();

    const [error, setError] = useState(false);

    useEffect(() => {
        startGetData("get_novedades");
    }, []);

    return (

        <MainLayout>

            <div className="row">

                <CardLight >
                    Bienvenido a ALF Tools 🤖
                </CardLight>

            </div>

            {
                <div className="col-md-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">

                            <div className="d-flex flex-row justify-content-between">
                                <h4 className="card-title mb-1">Ultimas novedades:</h4>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className="preview-list">
                                        {
                                            (data) ?
                                                data.map((novedad, index) => (
                                                    <CardNews
                                                        key    = {novedad.id}
                                                        color  = {novedad.color}
                                                        icon   = {novedad.icono}
                                                        titulo = {novedad.titulo}
                                                        texto  = {novedad.texto}
                                                        fecha  = {novedad.fecha}
                                                    />
                                                ))
                                                :
                                                <div className="alert alert-primary col-xl-12 col-sm-12" role="alert" hidden={!error}>
                                                    No se encontraron resultados
                                                </div>
                                        }
                                    </div>{/* preview-list end */}
                                </div> {/* col end */}
                            </div> {/* row end */}
                        </div> {/* card-body end */}
                    </div> {/* card end */}
                </div>
            }

        </MainLayout>
    )
}

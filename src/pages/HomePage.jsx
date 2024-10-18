import { useEffect, useState } from "react"
import { MainLayout } from "../components/layout/MainLayout"
import { CardNews, CardLight } from "../components/ui"
import { AlfClass } from "../classes/alfClass"


export const HomePage = () => {

    const alfClass = new AlfClass();

    const [data, setData] = useState([]);

    useEffect(() => {
        alfClass.getNovedades()
            .then(
                data => setData(data.datos)
            )
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
                                            (data) &&
                                                data.map((novedad, index) => (
                                                    <CardNews
                                                        key    = {novedad.id}
                                                        color  = {novedad.color}
                                                        icon   = {novedad.icono}
                                                        titulo = {novedad.titulo}
                                                        texto  = {novedad.texto}
                                                        fecha  = {novedad.fecha}
                                                        enlace = {novedad.enlace}
                                                    />
                                                ))
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

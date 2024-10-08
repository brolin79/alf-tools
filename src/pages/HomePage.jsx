import { useEffect, useState } from "react"
import { Firebase } from "../api/firebaseApi";
import { MainLayout } from "../components/layout/MainLayout"
import { CardNews, CardLight } from "../components/ui"


const firebase = new Firebase();

export const HomePage = () => {

    const [novedades, setNovedades] = useState(null);

    useEffect(() => {
        (async () => {
          try {
            const response = await firebase.getNovedades();
            setNovedades(response);
          } catch (error) {
            console.error(error);
          }
        })();
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
                                            (novedades) ? novedades.map((novedad, index) => {
                                                return (
                                                    <CardNews 
                                                        key    = {index}
                                                        color  = {novedad.color}
                                                        icon   = {novedad.icon}
                                                        titulo = {novedad.titulo}
                                                        texto  = {novedad.texto}
                                                        fecha  = {novedad.fecha}
                                                    />
                                                )
                                            }) : null
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

import { MainLayout } from "../components/layout/MainLayout"
import { CardNews, CardLight } from "../components/ui"


export const HomePage = () => {


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

                                        <CardNews 
                                            color="warning" 
                                            icon="image-multiple" 
                                            titulo="Gifs Tool" 
                                            texto="Busca gifs animados para apoyar tu creatividad" 
                                            fecha="05 Oct, 2024" 
                                        />

                                        <CardNews 
                                            color="warning" 
                                            icon="image-multiple" 
                                            titulo="Emojis Tool" 
                                            texto="Busca tus emojis favoritos para usar en tus redes sociales" 
                                            fecha="05 Oct, 2024" 
                                        />

                                        <CardNews 
                                            color="danger" 
                                            icon="table-large" 
                                            titulo="Weather Tool" 
                                            texto="Primera herramienta finalizada para poder ver el tiempo sin salir de casa" 
                                            fecha="03 Oct, 2024" 
                                        />

                                        <CardNews 
                                            color="success" 
                                            icon="home-floor-a" 
                                            titulo="Inauguración de ALF Tools" 
                                            texto="Lanzamiento de este proyecto con gran ilusión" 
                                            fecha="01 Oct, 2024" 
                                        />

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

import { Card } from "../../components/ui";

export const Weather = ({ data }) => {
    return (
        <>
            {
                // solo 6 resultados porque nun cupe
                data.slice(0, -1).map(event => {
                    return (
                        <Card key={event.fecha} col="2">
                            <h4 className="text-center">
                                {new Intl.DateTimeFormat('es-ES', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(event.fecha))}
                            </h4>
                            <p className="text-center">
                                {
                                    (event.probabilidadMedia > 50) ?
                                        <img src="assets/images/weather/storm.png" alt="Tormenta" /> :
                                        (event.probabilidadMedia > 35) ?
                                            <img src="assets/images/weather/rain.png" alt="Lluvia" /> :
                                            (event.probabilidadMedia > 15) ?
                                                <img src="assets/images/weather/cloudy.png" alt="Nublado" /> :
                                                (event.probabilidadMedia >= 0) ?
                                                    <img src="assets/images/weather/sun.png" alt="Soleado" /> :
                                                    null
                                }
                            </p>
                            <p className="text-center">
                                <img src={`assets/images/weather/hot.png`} alt="temperatura" />
                                <span style={{ fontSize: '20px', marginLeft: '10px' }}>{event.temperaturaMedia} oC</span>
                            </p>
                        </Card>
                    )
                })
            }
        </>

    )
}
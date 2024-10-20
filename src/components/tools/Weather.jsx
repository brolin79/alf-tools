import { Card } from "../ui";

export const WeatherTool = ({ data }) => {
    return (
        <>
            {
                // solo 6 resultados porque nun cupe
                data.slice(0, -1).map(event => {
                    return (
                        <Card key={event.fecha} col="2">
                            <h4 className="text-center">
                                {new Intl.DateTimeFormat('es-ES', { weekday: 'long', day: 'numeric', month: 'short' }).format(new Date(event.fecha)).replace(/de \d{4}/, '')}
                            </h4>
                            <p className="text-center">
                                {
                                    (event.probabilidadMedia > 50) ?
                                        <img src="assets/images/weather/storm.png" alt="Tormenta" /> :
                                        (event.probabilidadMedia > 30) ?
                                            <img src="assets/images/weather/rain.png" alt="Lluvia" /> :
                                            (event.probabilidadMedia > 10) ?
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
import { useEffect, useState } from "react"
import { MainLayout } from "../../components/layout/MainLayout"
import { Card, CardLight } from "../../components/ui"
import { Weather } from "../../components/tools/weather"
import { MiscClass } from "../../classes/miscClass"


export const WeatherPage = () => {

    const miscClass = new MiscClass();

    const [data, setData] = useState([]);

    useEffect(() => {
        miscClass.getWeather()
            .then(data => setData(data))
    }, []);


    return (

        <MainLayout>

            <div className="row">

                <CardLight >
                    Tiempo en Langreo 🌞
                </CardLight>

            </div>

            {
                (data) ?
                    <div className="row">
                        <Weather data={data} />
                    </div>
                : null
            }

        </MainLayout>
    )
}

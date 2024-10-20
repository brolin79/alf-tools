import { useEffect, useState } from "react"
import { MainLayout } from "../../components/layout/MainLayout"
import { Card, CardLight } from "../../components/ui"
import { WeatherTool } from "../../components/tools/Weather"
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
                        <WeatherTool data={data} />
                    </div>
                : null
            }

        </MainLayout>
    )
}

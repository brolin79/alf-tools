import { useEffect } from "react"
import { MainLayout } from "../../components/layout/MainLayout"
import { Card, CardLight } from "../../components/ui"
import { useMiscStore } from "../../store/hooks/useMiscStore"
import { Weather } from "../../components/tools/weather"


export const WeatherPage = () => {

    const { startLoadData, data } = useMiscStore();

    useEffect(() => {
        startLoadData();
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

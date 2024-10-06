import { useEffect } from "react"
import { MainLayout } from "../components/layout/MainLayout"
import { Card, CardLight } from "../components/ui"
import { useWeatherStore } from "../store/hooks/useWeatherStore"
import { Weather } from "../components/tools/weather"


export const HomePage = () => {

    const { startLoadData, data } = useWeatherStore();

    useEffect(() => {
        startLoadData();
    }, []);

    if (!data) return null;
    

    return (

        <MainLayout>

            <div className="row">

                <CardLight >
                    Bienvenido a ALF Tools
                </CardLight>

            </div>

            <div className="row">

                <Weather data={data.resultado} />
                
            </div>

        </MainLayout>
    )
}

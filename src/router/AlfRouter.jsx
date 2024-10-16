import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { EmojisPage } from "../pages/images/EmojisPage";
import { GifsPage } from "../pages/images/GifsPage";
import { WeatherPage } from "../pages/misc/WeatherPage";
import { AlfTest } from "../pages/test/alfTest";
import { CountryPage } from "../pages/misc/CountryPage";



export const AlfRouter = () => {
    return (
        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/inicio" element={<HomePage />} />

            <Route path="/emojis" element={<EmojisPage />} />
            <Route path="/gifs" element={<GifsPage />} />

            <Route path="/weather" element={ <WeatherPage /> } />
            <Route path="/paises" element={ <CountryPage /> } />

            <Route path="/alftest" element={ <AlfTest /> } />

            <Route path="/*" element={ <Navigate to="/" /> } />

        </Routes>
    )
}

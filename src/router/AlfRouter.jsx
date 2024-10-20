import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { PasswordPage } from "../pages/generators/PasswordPage";
import { LoremIpsumPage } from "../pages/generators/LoremIpsumPage";
import { EmojisPage } from "../pages/images/EmojisPage";
import { GifsPage } from "../pages/images/GifsPage";
import { WeatherPage } from "../pages/misc/WeatherPage";
import { CountryPage } from "../pages/misc/CountryPage";
import { AlfTest } from "../pages/test/alfTest";


export const AlfRouter = () => {
    return (
        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/inicio" element={<HomePage />} />

            <Route path="/passwords" element={<PasswordPage />} />
            <Route path="/lorem-ipsum" element={<LoremIpsumPage />} />

            <Route path="/emojis" element={<EmojisPage />} />
            <Route path="/gifs" element={<GifsPage />} />

            <Route path="/weather" element={ <WeatherPage /> } />
            <Route path="/paises" element={ <CountryPage /> } />

            <Route path="/alftest" element={ <AlfTest /> } />

            <Route path="/*" element={ <Navigate to="/" /> } />

        </Routes>
    )
}

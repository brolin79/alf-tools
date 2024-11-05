import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

import { PasswordPage } from "../pages/generators/PasswordPage";
import { LoremIpsumPage } from "../pages/generators/LoremIpsumPage";

import { EmojisPage } from "../pages/images/EmojisPage";
import { GifsPage } from "../pages/images/GifsPage";

import { WeatherPage } from "../pages/misc/WeatherPage";
import { CountryPage } from "../pages/misc/CountryPage";
import { AirportPage } from "../pages/misc/AirportPage";
import { TranslationPage } from "../pages/misc/TranslationPage";

import { UrlVarsPage } from "../pages/web/UrlVarsPage";
import { IpInfoPage } from "../pages/web/IpInfoPage";
import { ColorPickerPage } from "../pages/web/colorPicker";


export const AlfRouter = () => {
    return (
        <Routes>
            {/* Inicio */}
            <Route path="/" element={<HomePage />} />
            <Route path="/inicio" element={<HomePage />} />
            {/* Generadores */}
            <Route path="/passwords" element={<PasswordPage />} />
            <Route path="/lorem-ipsum" element={<LoremIpsumPage />} />
            {/* Imagenes */}
            <Route path="/emojis" element={<EmojisPage />} />
            <Route path="/gifs" element={<GifsPage />} />
            {/* Miscelanea */}
            <Route path="/weather" element={ <WeatherPage /> } />
            <Route path="/paises" element={ <CountryPage /> } />
            <Route path="/aeropuertos" element={ <AirportPage /> } />
            <Route path="/traductor" element={ <TranslationPage /> } />
            {/* Web */}
            <Route path="/url-vars" element={ <UrlVarsPage /> } />
            <Route path="/ip-info" element={ <IpInfoPage /> } />
            <Route path="/color-picker" element={ <ColorPickerPage /> } />
            {/* Ruta por defecto */}
            <Route path="/*" element={ <Navigate to="/" /> } />

        </Routes>
    )
}

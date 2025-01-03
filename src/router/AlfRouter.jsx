import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

import { PasswordPage } from "../pages/generators/PasswordPage";
import { LoremIpsumPage } from "../pages/generators/LoremIpsumPage";
import { CaseConverterPage } from "../pages/generators/CaseConverterPage";

import { EmojisPage } from "../pages/images/EmojisPage";
import { GifsPage } from "../pages/images/GifsPage";
import { PicturesPages } from "../pages/images/PicturesPages";

import { WeatherPage } from "../pages/misc/WeatherPage";
import { CountryPage } from "../pages/misc/CountryPage";
import { AirportPage } from "../pages/misc/AirportPage";
import { TranslationPage } from "../pages/misc/TranslationPage";
import { CurrencyPage } from "../pages/misc/CurrencyPage";
import { ImcPage } from "../pages/misc/ImcPage";

import { UrlVarsPage } from "../pages/web/UrlVarsPage";
import { IpInfoPage } from "../pages/web/IpInfoPage";
import { ColorPickerPage } from "../pages/web/ColorPicker";


export const AlfRouter = () => {
    return (
        <Routes>
            {/* Inicio */}
            <Route path="/" element={<HomePage />} />
            <Route path="/inicio" element={<HomePage />} />
            {/* Generadores */}
            <Route path="/passwords" element={<PasswordPage />} />
            <Route path="/lorem-ipsum" element={<LoremIpsumPage />} />
            <Route path="/convertir-texto" element={<CaseConverterPage />} />
            {/* Imagenes */}
            <Route path="/emojis" element={<EmojisPage />} />
            <Route path="/gifs" element={<GifsPage />} />
            <Route path="/imagen" element={<PicturesPages />} />
            {/* Miscelanea */}
            <Route path="/weather" element={ <WeatherPage /> } />
            <Route path="/paises" element={ <CountryPage /> } />
            <Route path="/aeropuertos" element={ <AirportPage /> } />
            <Route path="/traductor" element={ <TranslationPage /> } />
            <Route path="/monedas" element={ <CurrencyPage /> } />
            <Route path="/imc" element={ <ImcPage /> } />
            {/* Web */}
            <Route path="/url-vars" element={ <UrlVarsPage /> } />
            <Route path="/ip-info" element={ <IpInfoPage /> } />
            <Route path="/color-picker" element={ <ColorPickerPage /> } />
            {/* Ruta por defecto */}
            <Route path="/*" element={ <Navigate to="/" /> } />

        </Routes>
    )
}

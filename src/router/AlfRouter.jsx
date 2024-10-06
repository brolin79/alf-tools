import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import { HomePage } from "../pages/HomePage";

export const AlfRouter = () => {
    return (
        <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/*" element={ <Navigate to="/" /> } />

        </Routes>
    )
}

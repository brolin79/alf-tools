import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { Emojis } from "../pages/images/emojis";

export const AlfRouter = () => {
    return (
        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/emojis" element={<Emojis />} />

            <Route path="/*" element={ <Navigate to="/" /> } />

        </Routes>
    )
}

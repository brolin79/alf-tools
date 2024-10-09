import { configureStore } from "@reduxjs/toolkit";

import miscSlice from "./slices/miscSlice";
import imagesSlice from "./slices/imagesSlice";


export const store = configureStore({
    reducer: {
        weather: miscSlice,
        images: imagesSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
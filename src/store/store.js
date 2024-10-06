import { configureStore } from "@reduxjs/toolkit";

import weatherSlice from "./slices/weatherSlice";
import imagesSlice from "./slices/imagesSlice";


export const store = configureStore({
    reducer: {
        weather: weatherSlice,
        images: imagesSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
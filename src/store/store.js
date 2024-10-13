import { configureStore } from "@reduxjs/toolkit";

import miscSlice from "./slices/miscSlice";
import imagesSlice from "./slices/imagesSlice";
import alfSlice from "./slices/alfSlice";


export const store = configureStore({
    reducer: {
        weather: miscSlice,
        images: imagesSlice,
        apidb: alfSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
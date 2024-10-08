import { createSlice } from '@reduxjs/toolkit'


export const imagesSlice = createSlice({
    name: 'images',
    initialState: { 
        data: null,
        status: null,
    },
    reducers: {
        onSearchEmojis: ( state, { payload } ) => {
            state.data = payload.datos;
            state.status = "ok";
        },
        onSearchGifs: ( state, { payload } ) => {
            state.data = payload.randomGif;
            state.status = "ok";
        },
        onError : ( state, { payload } ) => {
            state.data = payload.error;
            state.status = "ko";
        }
    },
});


export const { onSearchEmojis, onSearchGifs, onError } = imagesSlice.actions;
export default imagesSlice.reducer;
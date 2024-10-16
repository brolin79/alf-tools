import { createSlice } from '@reduxjs/toolkit'


export const miscSlice = createSlice({
    name: 'misc',
    initialState: { 
        data: null,
        info: null,
    },
    reducers: {
        onLoadWeather: ( state, { payload } ) => {
            state.data = payload.resultado;
        },
        onGetCountryInfo: ( state, { payload } ) => {
            state.info = payload.resultado;
        },
    },
});


export const { onLoadWeather, onGetCountryInfo } = miscSlice.actions;
export default miscSlice.reducer;
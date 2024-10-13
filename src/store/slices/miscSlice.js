import { createSlice } from '@reduxjs/toolkit'


export const miscSlice = createSlice({
    name: 'misc',
    initialState: { 
        data: null,
    },
    reducers: {
        onLoadWeather: ( state, { payload } ) => {
            state.data = payload.resultado;
        },
    },
});


export const { onLoadWeather } = miscSlice.actions;
export default miscSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'


export const alfSlice = createSlice({
    name: 'apidb',
    initialState: { 
        data: null,
        status: null,
    },
    reducers: {
        onGetData: ( state, { payload } ) => {
            state.data = payload.datos.data;
            state.status = "ok";
        },
        onError : ( state, { payload } ) => {
            state.data = payload.error;
            state.status = "ko";
        }
    },
});


export const { onGetData, onError } = alfSlice.actions;
export default alfSlice.reducer;
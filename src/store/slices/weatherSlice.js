import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: { 
        data: null,
    },
    reducers: {
        onLoadData: ( state, { payload } ) => {
            state.data = payload;
        },
    },
});

export const { onLoadData } = weatherSlice.actions;
export default weatherSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'

export const imagesSlice = createSlice({
    name: 'images',
    initialState: { 
        data: null,
    },
    reducers: {
        onSearchEmojis: ( state, { payload } ) => {
            state.data = payload;
        },
    },
});

export const { onSearchEmojis } = imagesSlice.actions;
export default imagesSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {fetchCategory} from '../services/categoryService';

const initialState = {
    items: [],
    status: 'idle',
    error: null
}

const getCategories = createAsyncThunk('categories/getCategories', async () => {
    const response = await fetchCategory();
    return response;
});

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(getCategories.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.error
            })
    }
});

export { getCategories }
export default categorySlice.reducer;
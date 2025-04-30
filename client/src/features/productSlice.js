import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getProducts} from "../services/productService";

const initialState = {
    products: [],
    loading: false,
    error: false
}

const getProductsAsync = createAsyncThunk("product/getProducts", async () => {
    const response = await getProducts();
    return response;
});

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProductsAsync.pending, (state, action)=>{
            state.loading = true;
        });

        builder.addCase(getProductsAsync.fulfilled, (state, action)=>{
            state.loading = false;
            state.products = action.payload
        })

        builder.addCase(getProductsAsync.rejected, (state, action)=>{
            console.log(action.payload);
            state.loading = false;
            state.error = action.error.message;
        })
    }
});

export {getProductsAsync};
export default productSlice.reducer;
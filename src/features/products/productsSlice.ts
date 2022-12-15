import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import productItems from "../../data/productItems";
import { ProductsType } from "../../models/model";


export const getProducts = createAsyncThunk('products/getProducts', async(_, thunkAPI) => {
    try {
        const resp = await axios.get("https://fakestoreapi.com/products");
        return resp.data;
    } catch(error) {
        return thunkAPI.rejectWithValue('something went wrong');
    }
})

const initialState: ProductsType = {
    productItems: [],
    isLoading: false
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.isLoading=true;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading=false;
            state.productItems=action.payload;
        })
        .addCase(getProducts.rejected, (state) => {
            state.productItems=productItems;
        });
    }
})


export default productsSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import productItems from "../../data/productItems";
import { ProductsType, ProductItemType } from "../../models/model";
import { RootState } from "../../store";

export const LOCAL_STORAGE_KEY_PRODUCT_ITEMS = "ShoppingCartApp.ProductItems";


export const getProducts = createAsyncThunk<ProductItemType[], void, { state: RootState }>('products/getProducts', async(_, thunkAPI) => {
    const localStorageItem = localStorage.getItem(LOCAL_STORAGE_KEY_PRODUCT_ITEMS);
    //const { products } = thunkAPI.getState();
    if(localStorageItem /* && !products.isLoading*/) return JSON.parse(localStorageItem);
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
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/modal/modalSlice';
import productsSlice from "./features/products/productsSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
        products: productsSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
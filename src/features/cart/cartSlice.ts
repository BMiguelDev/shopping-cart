import { createSlice } from "@reduxjs/toolkit";
import { CartItemType, CartType } from "../../models/model";

export const LOCAL_STORAGE_KEY_CART_ITEMS = "ShoppingCartApp.CartItems";

// const initialState: CartType = {
//     cartItems: [],
//     totalAmount: 0,
//     totalPrice: 0,
// };

const initialState = (): CartType => {
    const localStorageItem = localStorage.getItem(LOCAL_STORAGE_KEY_CART_ITEMS);
    if (localStorageItem) {
        let [newAmount, newPrice] = [0, 0];
        const newCartItems: CartItemType[] = JSON.parse(localStorageItem);
        newCartItems.forEach((item) => {
            newAmount=newAmount+item.amount;
            newPrice=newPrice+(item.price*item.amount);
        })
        return {
            cartItems: newCartItems,
            totalAmount: newAmount,
            totalPrice: newPrice,
        };
    } else
        return {
            cartItems: [],
            totalAmount: 0,
            totalPrice: 0,
        };
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            state.totalAmount = 0;
            state.totalPrice = 0;
        },
        removeItem: (state, action) => {
            const { id, amount, price } = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== id);
            if (state.cartItems.length === 0) {
                state.totalAmount = 0;
                state.totalPrice = 0;
            } else {
                state.totalAmount = state.totalAmount - amount;
                state.totalPrice = state.totalPrice - price * amount;
            }
        },
        increaseItemAmount: (state, action) => {
            const id = action.payload;
            const itemIndex = state.cartItems.findIndex((item) => item.id === id);
            const { amount, price } = state.cartItems[itemIndex];
            state.cartItems[itemIndex].amount = amount + 1;
            state.totalPrice = state.totalPrice + price;
            state.totalAmount = state.totalAmount + 1;
        },
        decreaseItemAmount: (state, { payload }) => {
            const id = payload;
            const itemIndex = state.cartItems.findIndex((item) => item.id === id);
            const { amount, price } = state.cartItems[itemIndex];
            state.cartItems[itemIndex].amount = amount - 1;
            state.totalPrice = state.totalPrice - price;
            state.totalAmount = state.totalAmount - 1;
        },
        addProductToCart: (state, action) => {
            const product = action.payload;
            if (!state.cartItems.find((cartProduct) => product.id === cartProduct.id)) {
                let newProduct = { ...product };
                newProduct.amount = 1;
                state.cartItems.push(newProduct);
                state.totalAmount = state.totalAmount + 1;
                state.totalPrice = state.totalPrice + product.price;
            }
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //     .addCase(getCartItems.pending, (state) => {
    //         state.isLoading = true;
    //     })
    //     .addCase(getCartItems.fulfilled, (state, action) => {
    //         state.isLoading = false;
    //         state.cartItems = action.payload;
    //         let amount = 0;
    //         let total = 0;
    //         state.cartItems.forEach((item) => {
    //             item.amount=0;
    //             amount = amount + item.amount;
    //             total = total + item.price * item.amount;
    //         })
    //         state.totalAmount = amount;
    //         state.totalPrice = total;
    //     })
    //     .addCase(getCartItems.rejected, (state, action /*this action will be received because we are returning something in the axios catch block*/) => {
    //         // Change axios url (to make it inaccessible) to see this block running and showing in the console
    //         console.log(action);
    //         const newState = {
    //             cartItems: cartItems,
    //             totalAmount: 4,
    //             totalPrice: 2199.96,
    //             isLoading: false
    //         }
    //         return newState;
    //     });
    // }
});

export const { clearCart, removeItem, increaseItemAmount, decreaseItemAmount, addProductToCart } = cartSlice.actions;
export default cartSlice.reducer;

// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        carts: [],
        totalPrice: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const existProduct = state.carts.find((m) => m.id === action.payload.id);
            if (existProduct) {
                state.carts = state.carts.map((product) =>
                    product.id === action.payload.id
                        ? {
                              ...existProduct,
                              quantity: existProduct.quantity + 1,
                          }
                        : product,
                );
            } else {
                const data = {
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.Price,
                    img: action.payload.Img,
                    quantity: 1,
                };
                state.carts.push(data);
            }
            alert('product has been add in cart !!');
        },
        increaseQuantity: (state, action) => {
            const item = state.carts.find((item) => item.id === action.payload);
            item.quantity++;
        },
        decreaseQuantity: (state, action) => {
            const item = state.carts.find((item) => item.id === action.payload);
            if (item.quantity >= 2) {
                item.quantity--;
            } else {
                state.carts = state.carts.filter((m) => m.id !== action.payload);
            }
        },
        handleRemove: (state, action) => {
            state.carts = state.carts.filter((m) => m.id !== action.payload);
        },
    },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, increaseQuantity, decreaseQuantity, handleRemove, handleTotal } = cartSlice.actions;

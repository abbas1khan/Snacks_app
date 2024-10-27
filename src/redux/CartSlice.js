import { createSlice } from '@reduxjs/toolkit'
import { snacksData } from '../constants/SnacksData';

const CartSlice = createSlice({
    name: 'CartSlice',
    initialState: {
        data: [{ ...snacksData[0], quantity: 1 }]
    },
    reducers: {
        addToCart(state, action) {
            const index = state.data?.findIndex((item) => item?._id === action?.payload?._id)
            if (index === -1) {
                // Item is not in the cart, so add it
                state.data.push({ ...action.payload, quantity: action?.payload?.quantity || 1 });
            } else {
                // Item already exists, so increase its quantity
                state.data[index].quantity += 1;
            }
        },
        increaseQuantity(state, action) {
            const index = state.data?.findIndex((item) => item?._id === action?.payload);
            if (index !== -1) {
                state.data[index].quantity += 1;
            }
        },
        decreaseQuantity(state, action) {
            const index = state.data?.findIndex((item) => item?._id === action?.payload);
            if (index !== -1) {
                if (state.data[index].quantity > 1) {
                    state.data[index].quantity -= 1;
                } else {
                    // Optionally remove the item if quantity reaches 0
                    state.data.splice(index, 1);
                }
            }
        },
        deleteItemFromCart(state, action) {
            state.data = state?.data?.filter(item => item?._id !== action?.payload);
        },
        deleteAllItemsFromCart(state, action) {
            state.data = []
        },
    }
})

export const { addToCart, increaseQuantity, decreaseQuantity, deleteItemFromCart, deleteAllItemsFromCart } = CartSlice.actions

export default CartSlice.reducer

export const selectCartData = state => state.cartData.data
import { createSlice } from "@reduxjs/toolkit";
import reducer from "./cartSlice";

const initialState ={
    products:[],
}; 

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState,
    reducers:{
        addToWishlist : (state,action) =>{
            const item = action.payload;
            const existingItem = state.products.find((p) => p.id === item.id);

            if(!existingItem){
                state.products.push({ ...item});
            }
        },
        removeFromWishlist:(state,action)=>{
            const itemId = action.payload;
            state.products = state.products.filter((p) => p.id != itemId);
        },
        clearWishlist:(state)=>{
            state.products = [];
        },
    },
});

export const {addToWishlist,removeFromWishlist,clearWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;

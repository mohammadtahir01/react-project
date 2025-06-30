import { createSlice } from "@reduxjs/toolkit";

const CardSlice=createSlice({
    name:"MyCard",

    initialState:{
        Cart:[]
    },
    reducers:{
        AddToCard:(state,action)=>{
            state.Cart.push(action.payload);
        }
    }
})
export const {AddToCard} = CardSlice.actions;
export default CardSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const CardSlice=createSlice({
    name:"MyCard",

    initialState:{
        Cart:[]
    },
    reducers:{
        AddToCard:(state,action)=>{
           const  cardVal = state.Cart.filter((key)=>key.id === action.payload.id)

           if(cardVal.length >=1){
            alert("Card already")
           }else{
            state.Cart.push(action.payload);
           }
            
        },Remove:(state,action)=>{
            state.Cart=state.Cart.filter((key)=>key.id != action.payload.id);
        }
    }
})
export const {AddToCard,Remove} = CardSlice.actions;
export default CardSlice.reducer;
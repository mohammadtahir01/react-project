import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

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
            
        },
        Remove:(state,action)=>{
            state.Cart=state.Cart.filter((key)=>key.id != action.payload.id);
        },
        increase:(state,action)=>{
            for(let i=0; i<state.Cart.length; ++i){

                if(state.Cart[i].id == action.payload.id){
                    state.Cart[i].qnty++;
                }
            }
        },
         decrease:(state,action)=>{
            for(let i=0; i<state.Cart.length; ++i){

                if(state.Cart[i].id == action.payload.id){
                   
                    if(state.Cart[i].qnty<=1){
                        alert("Quantity should be more than 1");
                    }else{
                        state.Cart[i].qnty--;
                    }
                }
            }
        }
    }
})
export const {AddToCard,Remove,increase,decrease} = CardSlice.actions;
export default CardSlice.reducer;
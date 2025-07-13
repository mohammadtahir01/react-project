import { createSlice } from "@reduxjs/toolkit";


const TodoSlice=createSlice({
    name:"todos",

    initialState:{
        Task:[]
    },
    reducers:{
        Addtask:(state,action)=>{
            state.Task.push(action.payload)
        }
    }
})
export const {Addtask} = TodoSlice.actions;
export default TodoSlice.reducer;
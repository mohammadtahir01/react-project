import { createSlice } from "@reduxjs/toolkit";

const CardSlice2 = createSlice({
  name: "card2",
  initialState: {
    Task2: []
  },
  reducers: {
    AddToCard2: (state, action) => {
      if (!state.Task2.includes(action.payload)) {
        state.Task2.push(action.payload); // Only pushing ID
      }
    },
    del:(state,action)=>{
      state.Task2=state.Task2.filter((key)=>key.id != action.payload.id)
    }
  }
});
export const {AddToCard2,del} = CardSlice2.actions;
export default CardSlice2.reducer;

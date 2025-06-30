import { configureStore } from "@reduxjs/toolkit";
import my from "./cardSlice"
const Store=configureStore({
    reducer:{
       MyCard:my
    }
})
export default Store;
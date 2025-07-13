import { configureStore } from "@reduxjs/toolkit";
import my from "./todoslice"

const Store=configureStore({
    reducer:{
        todos:my
    }
})
export default Store;
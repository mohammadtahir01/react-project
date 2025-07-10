import { configureStore } from "@reduxjs/toolkit";
import myfile from "./todoSlice"

const Store = configureStore({
    reducer:{
      todo:myfile
    }
})
export default Store;
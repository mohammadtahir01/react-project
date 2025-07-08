import { configureStore } from "@reduxjs/toolkit";
import my from "./cardSlice"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig ={
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, my);
const Store=configureStore({
    reducer:{
       MyCard:persistedReducer
    }
})
export default Store;
export const persistor = persistStore(Store);
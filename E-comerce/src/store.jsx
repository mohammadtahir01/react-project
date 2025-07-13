import { configureStore } from "@reduxjs/toolkit";
import my from "./cardSlice";
import my2 from "./cardSlice2";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
};

// Combine both reducers first
const rootReducer = combineReducers({
  MyCard: my,
  card2: my2,
});

// Apply persistReducer on the combined rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const Store = configureStore({
  reducer: persistedReducer,
});

export default Store;
export const persistor = persistStore(Store);




















// import { configureStore } from "@reduxjs/toolkit";
// import my from "./cardSlice"
// // import my2 from "./cardSlice2"
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig ={
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, my);
// const Store=configureStore({
//     reducer:{
//       MyCard:persistedReducer
//       // card2:persistedReducer
//     }
// })
// export default Store;
// export const persistor = persistStore(Store);
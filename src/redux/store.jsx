import { configureStore } from "@reduxjs/toolkit";
import StoreReducer from "./storeSlice.jsx";
const store = configureStore({
    reducer :{
        store : StoreReducer
    }
})
export default store
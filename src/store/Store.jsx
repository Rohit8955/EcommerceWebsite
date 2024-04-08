import { configureStore } from "@reduxjs/toolkit";
import Statetype from './slices/Statetype'
import WomenStatetype from "./slices/WomenStatetype";
import CartSlice from "./slices/CartSlice";
const Store = configureStore({
    reducer:{
        state:Statetype,
        womenstate: WomenStatetype,
        cart: CartSlice
    }
})

export default Store
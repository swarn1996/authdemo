import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../actions/productSlice';
import authReducer from '../actions/authSlice';

export const store = configureStore({
    reducer:{
         products:productReducer,
         auth:authReducer,
    }
})
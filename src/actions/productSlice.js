import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PRODUCT_URL = 'https://dummyjson.com/products?'

const initialState = {
 products:[],
 status:"idle",
 error:null
};

export const getProduct  = createAsyncThunk('products/getProduct', async ()=>{
       const response = await axios.get(`${PRODUCT_URL}limit=30`);
       return response.data
});

export const getProductBySearch = createAsyncThunk('products/getProductBySearch', async (value) =>{
    const response = await axios.get(`${PRODUCT_URL}q=${value}`)
    return response.data
})


const productsSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
    },
    extraReducers:builder =>{
        builder.addCase(getProduct.fulfilled, (state,action) =>{
            state.status = "succeeded"
            state.products = action.payload.products
        })
        builder.addCase(getProductBySearch.fulfilled, (state,action) =>{
            state.status = "succeeded"
            state.products = action.payload.products
        })
    }
})

export const selectAllProducts = (state) => state.products.products;

export default productsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[],
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        addUser(state,action){
            state.updatePostId = action.payload
        }
    }
});

export const {  updatePostId } = authSlice.actions;
export const selectAllUsers = (state) => state.auth.users;


export default authSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  login: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser(state, action) {
      state.users = action.payload;
      state.login = true;
    },
    logout(state, action) {
      state.login = action.payload;
    },
  },
});

export const { addUser, logout } = authSlice.actions;
export const selectAllUsers = (state) => state.auth.users;
export const isLogin = (state) => state.auth.login;

export default authSlice.reducer;

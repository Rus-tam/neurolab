import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null, token: null };
const localStorageToken = localStorage.getItem("accessToken");
const localStorageUser = localStorage.getItem("user");
if (localStorageToken && localStorageUser) {
  initialState.token = localStorageToken;
  initialState.user = localStorageUser;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const accessToken = action.payload;
      const user = JSON.parse(atob(accessToken.split(" ")[1].split(".")[1]));
      state.user = user;
      state.token = accessToken;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(user));
    },
    // eslint-disable-next-line no-unused-vars
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export const authReducer = authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;

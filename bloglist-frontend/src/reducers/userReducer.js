import { createSlice } from "@reduxjs/toolkit";
import blogService from "../services/blogs";
import { setTimedInfo } from "./infoReducer";

let initialState = null;
const loggedUser = window.localStorage.getItem("user");
if (loggedUser) {
  initialState = JSON.parse(loggedUser);
  blogService.setToken(initialState.token);
}

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
    logout: () => {
      return null;
    },
  },
});

const { login, logout } = userSlice.actions;

export const userLogin = (username, password) => {
  return async (dispatch) => {
    try {
      const user = await blogService.login({ username, password });
      blogService.setToken(user.token);
      window.localStorage.setItem("user", JSON.stringify(user));
      dispatch(login(user));
    } catch (error) {
      dispatch(setTimedInfo("wrong username or password", 5000));
    }
  };
};

export const userLogout = () => {
  return (dispatch) => {
    blogService.setToken(null);
    window.localStorage.removeItem("user");
    dispatch(logout());
  };
};

export default userSlice.reducer;

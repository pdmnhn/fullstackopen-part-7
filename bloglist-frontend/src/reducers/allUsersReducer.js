import { createSlice } from "@reduxjs/toolkit";
import userService from "../services/users";

const allUsersSlice = createSlice({
  name: "allUsers",
  initialState: [],
  reducers: {
    setUsers: (state, action) => {
      return action.payload;
    },
  },
});

const { setUsers } = allUsersSlice.actions;

export const initializeUsers = () => {
  return async (dispatch) => {
    const allUsers = await userService.getAll();
    dispatch(setUsers(allUsers));
  };
};

export default allUsersSlice.reducer;

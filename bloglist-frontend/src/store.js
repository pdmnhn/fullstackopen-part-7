import { configureStore } from "@reduxjs/toolkit";
import infoReducer from "./reducers/infoReducer";
import blogsReducer from "./reducers/blogsReducer";
import userReducer from "./reducers/userReducer";
import allUsersReducer from "./reducers/allUsersReducer";

const store = configureStore({
  reducer: {
    info: infoReducer,
    blogs: blogsReducer,
    user: userReducer,
    allUsers: allUsersReducer,
  },
});

export default store;

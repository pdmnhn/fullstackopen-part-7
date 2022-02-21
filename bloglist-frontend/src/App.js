import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { initializeUsers } from "./reducers/allUsersReducer";
import { initializeBlogs } from "./reducers/blogsReducer";

import NavBar from "./components/NavBar";
import Notification from "./components/Notification";
import CurrentUser from "./components/CurrentUser";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";
import Users from "./components/Users";
import User from "./components/User";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeBlogs());
    dispatch(initializeUsers());
  }, []);

  return (
    <div className="container">
      <NavBar />
      <Notification />
      <CurrentUser />
      <Routes>
        <Route index element={<Blogs />} />
        <Route path="blogs/:id" element={<Blog />} />
        <Route path="users">
          <Route index element={<Users />} />
          <Route path=":id" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

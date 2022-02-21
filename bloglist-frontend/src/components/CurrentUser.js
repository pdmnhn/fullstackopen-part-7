import { useDispatch, useSelector } from "react-redux";
import { userLogin, userLogout } from "../reducers/userReducer";
import Togglable from "./Togglable";
import LoginForm from "./LoginForm";

const CurrentUser = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogin = (username, password) => {
    dispatch(userLogin(username, password));
  };
  const handleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <div>
      {!user && (
        <Togglable buttonText="log in" openByDefault={true}>
          <LoginForm handleLogin={handleLogin} />
        </Togglable>
      )}
      {user && (
        <div>
          <h2>blogs</h2>
          <p>
            {user.username} logged in{" "}
            <button onClick={handleLogout}>logout</button>
          </p>
        </div>
      )}
    </div>
  );
};

export default CurrentUser;

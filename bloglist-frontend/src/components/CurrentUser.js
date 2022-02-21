import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
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

  if (user) {
    return (
      <Button variant="secondary" onClick={handleLogout}>
        Logout
      </Button>
    );
  }

  return (
    <Togglable buttonText="Login" openByDefault={true}>
      <LoginForm handleLogin={handleLogin} />
    </Togglable>
  );
};

export default CurrentUser;

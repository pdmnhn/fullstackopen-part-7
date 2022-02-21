import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const LoginForm = ({ handleLogin }) => {
  const submit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    event.target.username.value = event.target.password.value = "";
    handleLogin(username, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <Form onSubmit={submit}>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" name="username" />
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" name="password" />
          <Button className="my-2" variant="primary" type="submit">
            Login
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;

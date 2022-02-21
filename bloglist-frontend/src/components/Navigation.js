import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

const Navigation = () => {
  const user = useSelector((state) => state.user);

  const style = { paddingLeft: "1rem", textDecoration: "none" };

  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      variant="dark"
      bg="dark"
      className="mb-4"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link style={style} to="/">
            <Nav.Link as="span">Blogs</Nav.Link>
          </Link>
          <Link style={style} to="/users">
            <Nav.Link as="span">Users</Nav.Link>
          </Link>
          <Nav.Link as="span">
            {user && <em style={style}>{user.username} logged in</em>}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

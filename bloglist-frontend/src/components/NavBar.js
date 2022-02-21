import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Blogs</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

export default NavBar;

import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const User = () => {
  const id = useParams().id;
  const user = useSelector((state) =>
    state.allUsers.find((user) => user.id === id)
  );

  if (!user) {
    return <div>user not found...</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <h2>Added blogs</h2>
      <ul className="list-group">
        {user.blogs.map((blog) => (
          <li key={blog.id} className="list-group-item">
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;

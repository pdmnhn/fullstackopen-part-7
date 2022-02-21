import { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { createBlog } from "../reducers/blogsReducer";
import Togglable from "./Togglable";
import BlogForm from "./BlogForm";
import CurrentUser from "./CurrentUser";

const Blogs = () => {
  const user = useSelector((state) => state.user);
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  const blogFormRef = useRef();

  const handleNewBlog = (title, author, url) => {
    blogFormRef.current.toggleVisibility();
    dispatch(createBlog(title, author, url));
  };

  return (
    <div>
      <h1>Blogs</h1>
      <CurrentUser />
      {user && (
        <div>
          <Togglable
            buttonText="Create New Blog"
            openByDefault={false}
            ref={blogFormRef}
          >
            <BlogForm createNewBlog={handleNewBlog} />
          </Togglable>
          <br></br>
        </div>
      )}
      <Table striped bordered>
        <thead>
          <tr>
            <td>Blog</td>
            <td>Added by</td>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>
                <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
              </td>
              <td>{blog.author}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Blogs;

import { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { createBlog } from "../reducers/blogsReducer";
import Togglable from "./Togglable";
import BlogForm from "./BlogForm";

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
      {user && (
        <div>
          <Togglable
            buttonText="create new blog"
            openByDefault={false}
            ref={blogFormRef}
          >
            <BlogForm createNewBlog={handleNewBlog} />
          </Togglable>
          <br></br>
          <Table striped>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td>
                    <Link
                      to={`/blogs/${blog.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      {blog.title}
                    </Link>
                  </td>
                  <td>{blog.author}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Blogs;

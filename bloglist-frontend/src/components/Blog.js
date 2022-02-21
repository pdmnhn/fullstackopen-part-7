import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import {
  incrementLikes,
  deleteBlog,
  addComment,
} from "../reducers/blogsReducer";

const Blog = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const blog = useSelector((state) =>
    state.blogs.find((blog) => blog.id === id)
  );
  const user = useSelector((state) => state.user);

  if (!blog) {
    return <div>blog not found...</div>;
  }

  const handleLike = () => {
    dispatch(incrementLikes(blog));
  };

  const handleDelete = () => {
    dispatch(deleteBlog(blog));
  };

  const handleComment = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    event.target.comment.value = "";
    dispatch(addComment(blog, comment));
  };

  return (
    <div>
      <h1>
        {blog.title} by {blog.author}
      </h1>
      <p>
        <a href={`http://${blog.url}`}>Open Blog</a>
      </p>
      <p>
        {blog.likes} Likes
        {user && (
          <Button className="mx-2 like-button" onClick={handleLike}>
            Like
          </Button>
        )}
      </p>
      <p>
        Added by {blog.user.username}{" "}
        {user && user.username === blog.user.username && (
          <Button onClick={handleDelete}>Remove</Button>
        )}
      </p>

      <h3>Comments:</h3>
      <ul className="list-group">
        {blog.comments.map((comment, index) => (
          <li key={index} className="list-group-item">
            {comment}
          </li>
        ))}
      </ul>
      {user && (
        <Form className="my-2" onSubmit={handleComment}>
          <Form.Control type="text" name="comment" />
          <Button className="my-2" variant="primary" type="submit">
            Add Comment
          </Button>
        </Form>
      )}
    </div>
  );
};

export default Blog;

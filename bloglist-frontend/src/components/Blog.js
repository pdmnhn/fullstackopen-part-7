import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
        {blog.title} {blog.author}
      </h1>
      <a href={`http://${blog.url}`}>{blog.url}</a>
      <p>
        {blog.likes} likes
        <button className="like-button" onClick={handleLike}>
          like
        </button>
      </p>
      <div>added by {blog.user.username}</div>
      {user.username === blog.user.username && (
        <button onClick={handleDelete}>remove</button>
      )}
      <h3>comments</h3>
      <ul>
        {blog.comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <form onSubmit={handleComment}>
        <input name="comment" type="text" />
        <button type="submit">add comment</button>
      </form>
    </div>
  );
};

export default Blog;

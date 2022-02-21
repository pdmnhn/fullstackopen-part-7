import { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

const BlogForm = ({ createNewBlog }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const submit = (event) => {
    event.preventDefault();
    createNewBlog(title, author, url);
    setTitle("");
    setAuthor("");
    setUrl("");
  };

  const changeState = (setState) => {
    return ({ target }) => {
      setState(target.value);
    };
  };
  return (
    <div>
      <h2>create new</h2>
      <Form onSubmit={submit}>
        <div>
          title:
          <input id="title" value={title} onChange={changeState(setTitle)} />
        </div>
        <div>
          author:
          <input id="author" value={author} onChange={changeState(setAuthor)} />
        </div>
        <div>
          url:
          <input id="url" value={url} onChange={changeState(setUrl)} />
        </div>
        <button id="create-button" type="submit">
          create
        </button>
      </Form>
    </div>
  );
};

BlogForm.propTypes = {
  createNewBlog: PropTypes.func.isRequired,
};

export default BlogForm;

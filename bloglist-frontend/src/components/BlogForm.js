import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

const BlogForm = ({ createNewBlog }) => {
  const submit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const url = event.target.url.value;
    event.target.title.value =
      event.target.author.value =
      event.target.url.value =
        "";
    createNewBlog(title, author, url);
  };

  return (
    <div>
      <h2>Create New</h2>
      <Form onSubmit={submit} className="my-2">
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control type="text" name="title" />
          <Form.Label>Author:</Form.Label>
          <Form.Control type="text" name="author" />
          <Form.Label>URL:</Form.Label>
          <Form.Control type="text" name="url" />
          <Button className="mt-2" classvariant="primary" type="submit">
            Create
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

BlogForm.propTypes = {
  createNewBlog: PropTypes.func.isRequired,
};

export default BlogForm;

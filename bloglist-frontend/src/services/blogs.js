import axios from "axios";
const baseUrl = "/api/blogs";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const login = async (credentials) => {
  const response = await axios.post("/api/login", credentials);
  return response.data;
};

let token;
const setToken = (t) => {
  token = "bearer " + t;
};

const createNewBlog = async (blog) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseUrl, blog, config);
  return response.data;
};

const updateBlog = async (blog) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.put(`${baseUrl}/${blog.id}`, blog, config);
  return response.data;
};

const deleteBlog = async (id) => {
  const config = {
    headers: { Authorization: token },
  };
  await axios.delete(`${baseUrl}/${id}`, config);
};

const getComments = async (id) => {
  const comments = await axios.get(`${baseUrl}/${id}/comments`);
  return comments.data;
};

const addComment = async (id, comment) => {
  const comments = await axios.post(`${baseUrl}/${id}/comments`, { comment });
  return comments.data;
};

const utils = {
  getAll,
  login,
  setToken,
  createNewBlog,
  updateBlog,
  deleteBlog,
  getComments,
  addComment,
};

export default utils;

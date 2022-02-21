import { createSlice } from "@reduxjs/toolkit";
import blogService from "../services/blogs";
import { setTimedInfo } from "./infoReducer";

const sortBlog = (blog1, blog2) => {
  return blog2.likes - blog1.likes;
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    setBlogs: (state, action) => {
      action.payload.sort(sortBlog);
      return action.payload;
    },
    addBlog: (state, action) => {
      state.push(action.payload);
    },
    modifyBlog: (state, action) => {
      return state
        .map((blog) => (blog.id === action.payload.id ? action.payload : blog))
        .sort(sortBlog);
    },
    removeBlog: (state, action) => {
      return state.filter((blog) => blog.id !== action.payload);
    },
  },
});

const { setBlogs, addBlog, modifyBlog, removeBlog } = blogsSlice.actions;

export const initializeBlogs = () => {
  return async (dispatch) => {
    const all = await blogService.getAll();
    dispatch(setBlogs(all));
  };
};

export const createBlog = (title, author, url) => {
  return async (dispatch) => {
    try {
      const created = await blogService.createNewBlog({ title, author, url });
      dispatch(addBlog(created));
      dispatch(setTimedInfo(`a new blog ${created.title} added`, 5000));
    } catch (error) {
      dispatch(
        setTimedInfo("title and url are required to create a new blog", 5000)
      );
    }
  };
};

export const incrementLikes = (blog) => {
  return async (dispatch) => {
    const incremented = await blogService.updateBlog(blog);
    dispatch(modifyBlog(incremented));
  };
};

export const deleteBlog = (blog) => {
  return async (dispatch) => {
    if (!window.confirm(`Delete ${blog.title} by ${blog.author}?`)) {
      return;
    }
    try {
      await blogService.deleteBlog(blog.id);
      dispatch(removeBlog(blog.id));
      dispatch(
        setTimedInfo(`${blog.title} by ${blog.author} is removed`, 5000)
      );
    } catch (e) {
      dispatch(setTimedInfo("Error deleting the blog", 5000));
    }
  };
};

export const addComment = (blog, comment) => {
  return async (dispatch) => {
    const comments = await blogService.addComment(blog.id, comment);
    dispatch(modifyBlog({ ...blog, comments }));
  };
};

export default blogsSlice.reducer;

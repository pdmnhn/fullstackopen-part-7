import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name: "info",
  initialState: "",
  reducers: {
    setInfo: (state, action) => {
      return action.payload;
    },
    clearInfo: () => {
      return "";
    },
  },
});

let timeoutID = null;

export const setTimedInfo = (message, timeout) => {
  return (dispatch) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    dispatch(setInfo(message));
    timeoutID = setTimeout(() => {
      dispatch(clearInfo());
    }, timeout);
  };
};

export const { setInfo, clearInfo } = infoSlice.actions;

export default infoSlice.reducer;

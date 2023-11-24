import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "../features/redux";

export default configureStore({
  reducer: {
    api: apiReducer,
  },
});

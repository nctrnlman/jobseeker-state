import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiSlice = createSlice({
  name: "apiTest",
  initialState: {
    api: null,
  },
  reducers: {
    setApi: (state, action) => {
      state.api = action.payload;
    },
  },
});

export const { setApi } = apiSlice.actions;
export default apiSlice.reducer;

export function getApi() {
  return async (dispatch) => {
    try {
      let response = await axios.get(`https://dummyjson.com/products/1`);
      dispatch(setApi(response.data));
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}

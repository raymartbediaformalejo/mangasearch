import { createSlice } from "@reduxjs/toolkit";

const recommendationSlice = createSlice({
  name: "recommendation",
  initialState: {
    mangaArr: [],
  },
  reducers: {
    replaceManga(state, action) {
      state.mangaArr = action.payload.mangaArr;
    },
  },
});

export const recommendationActions = recommendationSlice.actions;

export default recommendationSlice;

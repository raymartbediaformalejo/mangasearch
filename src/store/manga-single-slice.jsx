import { createSlice } from "@reduxjs/toolkit";

const mangaSingleSlice = createSlice({
  name: "single",
  initialState: {
    mangaInfo: [{}],
  },
  reducers: {
    replaceManga(state, action) {
      console.log(action.payload.mangaInfo);
      state.mangaInfo = action.payload.mangaInfo;
    },
  },
});

export const singleActions = mangaSingleSlice.actions;

export default mangaSingleSlice;

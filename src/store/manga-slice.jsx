import { createSlice } from "@reduxjs/toolkit";

const mangaSlice = createSlice({
  name: "manga",
  initialState: {
    mangaArr: [],
    currentPage: 1,
    pageCount: 0,
  },
  reducers: {
    replaceManga(state, action) {
      state.mangaArr = action.payload.mangaArr;
    },
    pageChanger(state, action) {
      state.currentPage = action.payload;
    },

    pageCouter(state, action) {
      state.pageCount = Math.floor(action.payload.pageCountPagination);
    },
  },
});

export const mangaActions = mangaSlice.actions;

export default mangaSlice;

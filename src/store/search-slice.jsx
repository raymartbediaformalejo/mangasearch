import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    mangaArr: [],
    mangaToSearch: "",
    mangaToSearchFromHome: "",
    currentPage: 1,
    pageCount: 0,
  },
  reducers: {
    replaceManga(state, action) {
      // console.log(state.mangaArr);
      state.mangaArr = action.payload.mangaArr;
    },
    searchManga(state, action) {
      state.mangaToSearch = action.payload;
    },
    searchMangaFromHome(state, action) {
      state.mangaToSearchFromHome = action.payload;
    },
    pageChanger(state, action) {
      state.currentPage = action.payload;
    },

    pageCouter(state, action) {
      state.pageCount = Math.floor(action.payload.pageCountPagination);
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;

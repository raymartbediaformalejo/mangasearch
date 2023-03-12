import { configureStore } from "@reduxjs/toolkit";

import mangaSingleSlice from "./manga-single-slice";
import mangaSlice from "./manga-slice";
import searchSlice from "./search-slice";

const store = configureStore({
  reducer: {
    manga: mangaSlice.reducer,
    search: searchSlice.reducer,
    singleManga: mangaSingleSlice.reducer,
  },
});

export default store;

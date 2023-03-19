import { configureStore } from "@reduxjs/toolkit";

import mangaSingleSlice from "./manga-single-slice";
import mangaSlice from "./manga-slice";
import recommendationSlice from "./recommendation-slice";
import searchSlice from "./search-slice";

const store = configureStore({
  reducer: {
    manga: mangaSlice.reducer,
    search: searchSlice.reducer,
    singleManga: mangaSingleSlice.reducer,
    recommendation: recommendationSlice.reducer,
  },
});

export default store;

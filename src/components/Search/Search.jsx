import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { Pagination, createTheme, ThemeProvider, Stack } from "@mui/material";

import {
  fetchSearchData,
  searchGoToPage,
  mangaToSearch,
} from "../../store/manga-actions";
import MainNavigation from "../MainNavigation/MainNavigation";
import classes from "./Search.module.css";

const Search = (props) => {
  const dispatch = useDispatch();
  const mangaList = useSelector((state) => state.search.mangaArr);
  const currentPage = useSelector((state) => state.search.currentPage);
  const pageCount = useSelector((state) => state.search.pageCount);
  const mangaText = useSelector((state) => state.search.mangaToSearch);
  const [page, setPage] = useState(1);

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#ffd600",
      },
    },
  });

  const paginationStyle = {
    width: "100%",
    maxWidth: "800px",
    margin: "30px auto 0",
    "& ul": {
      display: "flex",
      gap: "1rem",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
    },
    "& button": {
      color: "#bebebe",
      borderColor: "rgba(190, 190, 190, .2)",
    },
    "& div": {
      color: "#bebebe",
    },
  };

  console.log(mangaList);
  useEffect(() => {
    const identifier = setTimeout(() => {
      dispatch(fetchSearchData(mangaText, currentPage));
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [dispatch, currentPage, mangaText]);

  // const handlePageClick = (event) => {
  //   dispatch(searchGoToPage(event.selected + 1));
  // };

  const searchInputHandler = (e) => {
    dispatch(mangaToSearch(e.target.value));
  };

  const handleChange = (_, value) => {
    console.log(value);
    dispatch(searchGoToPage(value));
    setPage(value);
  };

  return (
    <>
      <MainNavigation isSearch={true} />
      <div className={classes.maincontainer}>
        <div className={classes["search-container"]}>
          <input
            className={classes["search-form"]}
            placeholder="Search by title"
            onChange={searchInputHandler}
          />
          <button className={classes["search-btn"]}>
            <FiSearch className={classes.search} />
          </button>
        </div>

        <div className={classes["manga-container"]}>
          {mangaList.map((manga) => (
            <Link
              to={`/manga/${manga.id}`}
              key={manga.id}
              className={classes["manga-item"]}
            >
              <img
                src={manga.image.jpg.image_url}
                alt="manga"
                className={classes.image}
              />
              <p className={classes.title}>{manga.title}</p>
              <p className={classes.authors}>
                {manga.authors[0] && manga.authors[0].name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <ThemeProvider theme={theme}>
        <Stack spacing={2}>
          <Pagination
            count={pageCount}
            page={page}
            onChange={handleChange}
            color="secondary"
            shape="rounded"
            variant="outlined"
            sx={paginationStyle}
            size="medium"
          />
        </Stack>
      </ThemeProvider>
      {/* <ReactPaginate
        className={classes.pagination}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
      /> */}
    </>
  );
};

export default Search;

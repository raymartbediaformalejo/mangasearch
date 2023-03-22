import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, createTheme, ThemeProvider, Stack } from "@mui/material";

import MangaListItem from "./MangaListItem";
import classes from "./MangaList.module.css";
import { fetchMangaData, goToPage } from "../../store/manga-actions";

const MangaList = () => {
  const dispatch = useDispatch();
  const mangaList = useSelector((state) => state.manga.mangaArr);
  const currentPage = useSelector((state) => state.manga.currentPage);
  const pageCount = useSelector((state) => state.manga.pageCount);
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
      gap: ".4rem",
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

  useEffect(() => {
    dispatch(fetchMangaData(currentPage));
  }, [dispatch, currentPage]);

  const handleChange = (_, value) => {
    console.log(value);
    dispatch(goToPage(value));
    setPage(value);
  };

  return (
    <div className={classes.container}>
      <h2 className={classes["top-manga"]}>Top Manga</h2>
      <div className={classes["inner-container"]}>
        {mangaList.map((manga) => (
          <MangaListItem
            key={manga.id}
            id={manga.id}
            title={manga.title}
            authors={manga.authors}
            image={manga.image.jpg.image_url}
            rank={manga.rank}
            chapters={manga.chapters}
            titleSynonyms={manga.titleSynonyms}
            rating={manga.rating}
          />
        ))}
      </div>
      {/* 
      <ReactPaginate
        className={classes.pagination}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
      /> */}
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
    </div>
  );
};

export default MangaList;

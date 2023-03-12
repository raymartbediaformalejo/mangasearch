import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import MangaListItem from "./MangaListItem";
import classes from "./MangaList.module.css";
import { fetchMangaData, goToPage } from "../../store/manga-actions";

const MangaList = () => {
  const dispatch = useDispatch();
  const mangaList = useSelector((state) => state.manga.mangaArr);
  const currentPage = useSelector((state) => state.manga.currentPage);
  const pageCount = useSelector((state) => state.manga.pageCount);

  useEffect(() => {
    dispatch(fetchMangaData(currentPage));
  }, [dispatch, currentPage]);

  const handlePageClick = (event) => {
    dispatch(goToPage(event.selected + 1));
    console.log(event.selected);
  };

  return (
    <div className={classes.container}>
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

      <ReactPaginate
        className={classes.pagination}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default MangaList;

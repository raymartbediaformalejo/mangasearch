import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

// import useWindowDimensions from "../hooks/use-windowDimensions";

import MangaItem from "./MangaItem";
import classes from "./MangaList.module.css";

const MangaList = () => {
  const [mangaArr, setMangaArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState();
  // const { width } = useWindowDimensions();

  useEffect(() => {
    const fetchTopManga = async () => {
      const res = await fetch(
        `https://api.jikan.moe/v4/top/manga?page=${currentPage}`
      );

      if (!res.ok) throw new Error("Could not fetch top manga!");
      const data = await res.json();
      console.log(data);

      setPageCount(
        data.pagination.items.total / data.pagination.items.per_page
      );

      const loadedManga = Object.entries(data.data)
        .filter(
          (manga) =>
            manga[1].type === "Manga" ||
            manga[1].type === "Manhwa" ||
            manga[1].type === "Manhua"
        )

        .map((manga) => {
          return {
            id: manga[1].mal_id,
            title: manga[1].title,
            authors: manga[1].authors,
            image: manga[1].images,
            rank: manga[1].rank,
            chapters: manga[1].chapters,
            titleSynonyms: manga[1].title_synonyms[0],
            rating: manga[1].score,
          };
        });

      setMangaArr(loadedManga);
    };
    fetchTopManga();
  }, [currentPage]);

  // console.log(mangaArr);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
    console.log(event);
  };
  return (
    <div className={classes.container}>
      <div className={classes["inner-container"]}>
        {mangaArr.map((manga) => (
          <MangaItem
            key={manga.id}
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
        // pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default MangaList;

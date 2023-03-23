import { singleActions } from "./manga-single-slice";
import { mangaActions } from "./manga-slice";
import { recommendationActions } from "./recommendation-slice";
import { searchActions } from "./search-slice";

export const fetchMangaData = (currentPage) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.jikan.moe/v4/top/manga?page=${currentPage}`
      );

      if (!response.ok) throw new Error("Could not fetch manga data!");

      const data = await response.json();

      const pageCountPagination =
        data.pagination.items.total / data.pagination.items.per_page;

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

      return { loadedManga, pageCountPagination };
    };

    try {
      const { loadedManga, pageCountPagination } = await fetchData();
      dispatch(mangaActions.replaceManga({ mangaArr: loadedManga || [] }));
      dispatch(mangaActions.pageCouter({ pageCountPagination }));
    } catch (error) {
      console.log(`💥💥 ${error}`);
    }
  };
};
export const fetchRecommendationMangaData = (currentPage) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.jikan.moe/v4/recommendations/manga`
      );

      if (!response.ok)
        throw new Error("Could not fetch recommendation manga data!");

      const data = await response.json();
      // console.log(data);

      // const pageCountPagination =
      //   data.pagination.items.total / data.pagination.items.per_page;

      const loadedManga = Object.entries(data.data)
        .map((manga) => {
          return {
            id: manga[1].entry[0].mal_id,
            title: manga[1].entry[0].title,
            image: manga[1].entry[0].images,
            url: manga[1].entry[0].url,
            userName: manga[1].user.username,
            userUrl: manga[1].user.url,
            date: manga[1].date,
          };
        })
        .filter((obj, index, arr) => {
          return arr.map((mapObj) => mapObj["id"]).indexOf(obj["id"]) === index;
        })
        .reduce((acc, obj) => {
          if (acc.length < 20) {
            acc.push(obj);
          }
          return acc;
        }, []);

      // console.log(loadedManga);

      return { loadedManga };
    };

    try {
      const { loadedManga } = await fetchData();
      dispatch(
        recommendationActions.replaceManga({ mangaArr: loadedManga || [] })
      );
    } catch (error) {
      console.log(`💥💥 ${error}`);
    }
  };
};
export const fetchMangaSingleData = (mangaId) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.jikan.moe/v4/manga/${mangaId}/full`
      );
      //
      if (!response.ok) throw new Error("Could not fetch manga data!");

      const data = await response.json();
      console.log(data.data);
      const manga = data.data;

      // const pageCountPagination =
      //   data.pagination.items.total / data.pagination.items.per_page;

      const loadedManga = {
        id: manga.mal_id,
        title: manga.title,
        authors: manga.authors,
        image: manga.images,
        rating: manga.score,
        synopsis: manga.synopsis,
        genres: manga.genre,
        relations: manga.relations,
        status: manga.status,
        chapters: manga.chapters,
        members: manga.members,
        url: manga.url,
      };

      return loadedManga;
    };

    try {
      const mangaData = await fetchData();
      console.log(mangaData);
      dispatch(singleActions.replaceManga({ mangaInfo: mangaData || [] }));
    } catch (error) {
      console.log(`💥💥 ${error}`);
    }
  };
};
export const fetchSearchData = (mangaToSearch, currentPage) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.jikan.moe/v4/manga?letter=${mangaToSearch}&page=${currentPage}&order_by=score&sort=desc`
      );
      //
      if (!response.ok) throw new Error("Could not fetch manga data!");

      const data = await response.json();

      const pageCountPagination =
        data.pagination.items.total / data.pagination.items.per_page;

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
            rating: manga[1].score,
          };
        });

      return { loadedManga, pageCountPagination };
    };

    try {
      const { loadedManga, pageCountPagination } = await fetchData();
      // console.log(loadedManga);
      dispatch(searchActions.replaceManga({ mangaArr: loadedManga || [] }));
      dispatch(searchActions.pageCouter({ pageCountPagination }));
    } catch (error) {
      console.log(`💥💥 ${error}`);
    }
  };
};

export const goToPage = mangaActions.pageChanger;

export const searchGoToPage = searchActions.pageChanger;

export const mangaToSearch = searchActions.searchManga;

export const mangaToSearchFromHome = searchActions.searchMangaFromHome;

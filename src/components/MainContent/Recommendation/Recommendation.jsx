import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRecommendationMangaData } from "../../../store/manga-actions";
import classes from "./Recommendation.module.css";

const RecommendationManga = () => {
  const dispatch = useDispatch();
  const mangaList = useSelector((state) => state.recommendation.mangaArr);

  // console.log(mangaList);

  useEffect(() => {
    const identifier = setTimeout(() => {
      dispatch(fetchRecommendationMangaData());
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [dispatch]);

  return (
    <>
      <aside>
        <div className={classes["sub-header"]}>
          <h2 className={classes.title}>Recommendations</h2>
          <Link to="/" className={classes["sub-show-all"]}>
            View All
          </Link>
        </div>

        {mangaList &&
          mangaList.map((manga) => (
            <div className={classes["inner-container"]} key={manga.id}>
              <Link to={`/manga/${manga.id}`} className={classes["manga-link"]}>
                <div className={classes["manga-wrapper"]}>
                  <img
                    src={manga.image.jpg.image_url}
                    alt="manga recommendation"
                    className={classes.image}
                  ></img>
                  <div className={classes["info-wrapper"]}>
                    <p className={classes["manga-title"]}>{manga.title}</p>
                    <p className={classes["recommended-by"]}>
                      Recommended by:{" "}
                      <span className={classes.user}>{manga.userName}</span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </aside>
    </>
  );
};

export default RecommendationManga;

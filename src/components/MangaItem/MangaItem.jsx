import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMangaSingleData } from "../../store/manga-actions";
import Footer from "../Footer/Footer";
import MainNavigation from "../MainNavigation/MainNavigation";
import classess from "./MangaItem.module.css";

const MangaItem = (props) => {
  const dispatch = useDispatch();
  const mangaInfo = useSelector((state) => state.singleManga.mangaInfo);
  const mangaId = props.mangaId;
  const mangaImg = {
    backgroundImage: `url(${mangaInfo.image && mangaInfo.image.jpg.image_url})`,
  };

  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    if (mangaInfo.authors) {
      const getAuthors = () => {
        return Object.entries(mangaInfo.authors)
          .map((author) => {
            let authorArr = [];
            if (author[1].name.indexOf(",") > -1) {
              const authorComma = author[1].name.split(",");

              authorArr.push(`${authorComma[1]} ${authorComma[0]}`);
            } else {
              authorArr.push(author[1].name);
            }
            return authorArr;
          })
          .join("/")
          .split();
      };

      setAuthors(getAuthors());
    }
  }, [mangaInfo.authors]);
  useEffect(() => {
    dispatch(fetchMangaSingleData(mangaId));
  }, [dispatch, mangaId]);
  console.log(mangaInfo.url);
  return (
    <>
      <MainNavigation />
      <div className={classess["main-container"]}>
        <div className={classess["inner-container"]}>
          <div className={classess["img-overlay"]} style={mangaImg}>
            <div></div>
          </div>

          <div className={classess["detail-header"]}>
            <div className={classess["wrapper"]}>
              <div className={classess["image-header"]}>
                {mangaInfo.image && (
                  <Link
                    to={mangaInfo.url}
                    target="_blank"
                    // rel="noopener noreferrer"
                  >
                    <img
                      src={mangaInfo.image.jpg.image_url}
                      alt="manga"
                      className={classess.image}
                    ></img>
                  </Link>
                )}
              </div>

              <div className={classess["info-wrapper"]}>
                <h1 className={classess.title}>{mangaInfo.title}</h1>
                <p className={classess.author}>{authors}</p>
                <div className={classess["summary-wrapper"]}>
                  <div className={classess["summary-title"]}>
                    <h6>Summary</h6>
                  </div>
                  <p className={classess.overview}>
                    {mangaInfo.synopsis
                      ? mangaInfo.synopsis
                      : "No summary information has been added to this manga."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <Footer />
    </>
  );
};

export default MangaItem;

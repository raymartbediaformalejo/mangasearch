import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMangaSingleData } from "../../store/manga-actions";
import MainNavigation from "../MainNavigation/MainNavigation";
import classess from "./MangaItem.module.css";

const MangaItem = (props) => {
  const dispatch = useDispatch();
  const mangaInfo = useSelector((state) => state.singleManga.mangaInfo);
  const mangaId = props.mangaId;

  console.log(mangaId);
  console.log(mangaInfo);

  useEffect(() => {
    dispatch(fetchMangaSingleData(mangaId));
  }, [dispatch, mangaId]);
  return (
    <>
      <MainNavigation />
      <div className={classess["main-container"]}>
        <div className={classess["inner-container"]}>
          <div className={classess["detail-header"]}>
            <div className={classess["title-detail-header"]}>
              <div className={classess["backgroud-overlay"]}>
                <div></div>
              </div>
              <div className={classess["detail-wrapper"]}>
                <div className={classess["image-header"]}>
                  {mangaInfo.image && (
                    <img
                      src={mangaInfo.image.jpg.image_url}
                      alt="manga"
                      className={classess.image}
                    ></img>
                  )}
                </div>
                <div>
                  <button className={classess.bookmark}>Bookmark</button>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default MangaItem;

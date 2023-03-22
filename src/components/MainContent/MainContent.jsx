import MangaList from "../MangaList/MangaLists";
import classes from "./MainContent.module.css";
import RecommendationManga from "./Recommendation/Recommendation";

const MainContent = () => {
  return (
    <>
      <div className={classes.fluidimg}></div>
      <div className={classes.container}>
        <MangaList />
        <RecommendationManga />
      </div>
    </>
  );
};

export default MainContent;

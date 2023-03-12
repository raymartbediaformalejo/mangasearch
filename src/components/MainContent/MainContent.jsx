import MangaCarousel from "../Carousel/Carousel";
import MangaList from "../MangaList/MangaLists";
import classes from "./MainContent.module.css";

const MainContent = () => {
  return (
    <>
      <div className={classes.fluidimg}></div>
      <MangaCarousel />
      <MangaList />
    </>
  );
};

export default MainContent;

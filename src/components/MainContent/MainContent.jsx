import MangaCarousel from "../Carousel/Carousel";
import MangaList from "../MangaList/MangaLists";
import PaginatedItems from "../Pagination/Pagination";
import classes from "./MainContent.module.css";

const MainContent = () => {
  return (
    <>
      <div className={classes.fluidimg}></div>
      <MangaCarousel />
      <MangaList />
      {/* <PaginatedItems itemsPerPage={4} /> */}
    </>
  );
};

export default MainContent;

import { useParams } from "react-router-dom";
import MangaItem from "../components/MangaItem/MangaItem";

const MangaSinglePage = () => {
  const { mangaId } = useParams();
  console.log(mangaId);
  return (
    <>
      <MangaItem mangaId={mangaId} />
    </>
  );
};

export default MangaSinglePage;

// export const loader = () => {};

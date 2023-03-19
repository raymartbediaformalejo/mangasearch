import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "../../assets/slides/slide1.jpg";
import slide2 from "../../assets/slides/slide2.jpg";
import slide3 from "../../assets/slides/slide3.jpg";

const MangaCarousel = () => {
  const slidesToShow = window.innerWidth >= 768 ? 2 : 1;

  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      autoPlay
      infiniteLoop
      interval={5000}
      showStatus={false}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        const defStyle = {
          width: 12,
          height: 12,
          backgroundColor: "#6e6e6e",
          display: "inline-block",
          cursor: "pointer",
          appearance: "none",
          border: "none",
          backgroundClip: "content-box",
          boxSizing: "content-box",
          marginLeft: 16,
          marginRight: 16,
          borderRadius: 10,
          transition: "all .2s",
        };
        const style = isSelected
          ? {
              ...defStyle,
              backgroundColor: "#ffd600",
              marginLeft: 12,
              marginRight: 12,
              width: 20,
              transition: "all .2s",
            }
          : { ...defStyle };
        return (
          <span
            style={style}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
          ></span>
        );
      }}
      slidesToShow={slidesToShow}
    >
      <div>
        <img src={slide1} alt="slide" />
      </div>
      <div>
        <img src={slide2} alt="slide" />
      </div>
      <div>
        <img src={slide3} alt="slide" />
      </div>
    </Carousel>
  );
};

export default MangaCarousel;

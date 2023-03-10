import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import slide1 from "../../assets/slides/slide1.jpg";
import slide2 from "../../assets/slides/slide2.jpg";
import slide3 from "../../assets/slides/slide3.jpg";

const MangaCarousel = () => {
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
          // marginLeft: 20,
          // color: "white",
          // cursor: "pointer",
          width: 12,
          height: 12,
          backgroundColor: "#6e6e6e",
          display: "inline-block",
          cursor: "pointer",
          appearance: "none",
          border: "none",
          backgroundClip: "content-box",
          boxSizing: "content-box",
          marginRight: 20,
          marginLeft: 20,
          borderRadius: 10,
          transitionDuration: 0.2,
          transitionTimingFunction: "ease",
          transitionDelay: 0,
          transitionProperty: "all",
        };
        const style = isSelected
          ? {
              ...defStyle,
              backgroundColor: "#ffd600",
              width: 20,
              transitionDuration: 0.2,
              transitionTimingFunction: "ease",
              transitionDelay: 0,
              transitionProperty: "all",
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

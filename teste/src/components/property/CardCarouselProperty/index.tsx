import Slider from "react-slick";
import "./CardCarousel.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CarouselProps = {
  children: React.ReactNode;
};

const CardCarousel: React.FC<CarouselProps> = ({ children }) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: false,    
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },     
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default CardCarousel;

import React, { useRef, useEffect } from "react";
import Slider from "react-slick";

import "./CardCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CarouselProps = { children: React.ReactNode };

const CardCarouselLogos: React.FC<CarouselProps> = ({ children }) => {
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  const settings = {
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrow: true,
  };

  return (
    <div id="logo-carousel">
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default CardCarouselLogos;

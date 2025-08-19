import React from "react";
import Slider from "react-slick";
import "./CardCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CarouselProps = {
  children: React.ReactNode;
  ctaHref?: string;
  ctaLabel?: string;
  ariaLabel?: string;
};

const CardCarousel: React.FC<CarouselProps> = ({
  children,
  ctaHref = "/buscar",
  ctaLabel = "Ver mais imóveis",
  ariaLabel = "Carrossel de imóveis em destaque",
}) => {
  const baseItems = React.Children.toArray(children);

  const items = [
    ...baseItems,
    <div className="carousel-cta-card">
      <div className="carousel-cta-card__content">
        <h3 className="carousel-cta-card__title">Encontre mais imóveis</h3>
        <p className="carousel-cta-card__text">
          Busque por cidade, preço, quartos e muito mais.
        </p>
        <a href={ctaHref} className="carousel-cta-card__button">
          Ver todos <span aria-hidden>→</span>
        </a>
      </div>
    </div>,
  ];

  const settings = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: false,
    swipeToSlide: true,
    accessibility: true,
    adaptiveHeight: true,
    lazyLoad: "progressive" as const,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1000,
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
    <section
      className="slider-container"
      role="region"
      aria-roledescription="carrossel"
      aria-label={ariaLabel}
      aria-live="polite"
    >
      <Slider {...settings}>{items}</Slider>
    </section>
  );
};

export default CardCarousel;

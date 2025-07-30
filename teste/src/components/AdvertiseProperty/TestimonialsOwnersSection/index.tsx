import React from "react";
import Slider from "react-slick";
import styles from "./TestimonialsOwnersSection.module.css";

const testimonials = [
  {
    quote: "Meu imóvel foi alugado em poucos dias! Serviço ágil e muito profissional.",
    author: "Maria Silva - Francisco Alves, PR",
  },
  {
    quote: "Equipe super dedicada, cuidou de todo o processo para mim. Recomendo!",
    author: "João Oliveira - Palotina, PR",
  },
  {
    quote: "Atendimento excelente, transparência do início ao fim!",
    author: "Carla Lima - Francisco Alves, PR",
  },
  // Adicione mais depoimentos se quiser
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Mostra 3 cards em telas grandes
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 700,
      settings: { slidesToShow: 1 }
    }
  ]
};

const TestimonialsOwnersSection: React.FC = () => (
  <section className={styles.section}>
    <h2 className={styles.title}>Proprietários que confiaram em nós</h2>
    <Slider {...settings} className={styles.cardsCarousel}>
      {testimonials.map((t, i) => (
        <div key={i}>
          <div className={styles.card}>
            <p className={styles.quote}>{t.quote}</p>
            <p className={styles.author}>{t.author}</p>
          </div>
        </div>
      ))}
    </Slider>
  </section>
);

export default TestimonialsOwnersSection;

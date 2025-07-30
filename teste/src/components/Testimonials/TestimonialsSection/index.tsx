import CardCarouselTestimonials from "../CardCarouselTestimonials";
import TestimonialCard from "../TestimonialCard";
import styles from "./Testimonials.module.css";

type Testimonial = {
  id: number;
  image: string;
  quote: string;
  name: string;
  location: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/assets/depo1.png",
    quote:
      "Consegui realizar o sonho da casa própria com a Mendes & Favaro. Excelente atendimento!",
    name: "Maria Silva",
    location: "Francisco Alves, PR",
  },
  {
    id: 2,
    image: "/assets/depo1.png",
    quote:
      "Consegui realizar o sonho da casa própria com a Mendes & Favaro. Excelente atendimento!",
    name: "João Souza",
    location: "Palotina, PR",
  },
  {
    id: 3,
    image: "/assets/depo1.png",
    quote:
      "Consegui realizar o sonho da casa própria com a Mendes & Favaro. Excelente atendimento!",
    name: "Ana Paula",
    location: "Assis Chateaubriand, PR",
  },
];

type TestimonialsSectionProps = {
  title: string;
};

export default function TestimonialsSection({ title }: TestimonialsSectionProps) {
  return (
    <section className={styles.testimonials}>
      <h2>{ title }</h2>
        <CardCarouselTestimonials>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.list}>
              <TestimonialCard
                image={t.image}
                quote={t.quote}
                name={t.name}
                location={t.location}
              />
            </div>
          ))}
        </CardCarouselTestimonials>
    </section>
  );
}

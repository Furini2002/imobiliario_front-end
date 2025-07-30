import CardCarousel from "../CardCarouselProperty";
import PropertyCard from "../PropertyCard";
import styles from "./FeaturedProperties.module.css";

type Property = {
  id: number;
  image: string;
  title: string;
  dorms: number;
  vagas: number;
  area: number;
  city: string;
  price: string;
};

const properties: Property[] = [
  {
    id: 1,
    image: "/src/assets/casa1.jpg",
    title: "Casa condomínio com 1 quartos",
    dorms: 4,
    vagas: 2,
    area: 560,
    city: "Palotina",
    price: "R$ 250.000,00",
  },
  {
    id: 2,
    image: "/src/assets/casa1.jpg",
    title: "Casa condomínio com 2 quartos",
    dorms: 4,
    vagas: 2,
    area: 560,
    city: "Palotina",
    price: "R$ 250.000,00",
  },
  {
    id: 3,
    image: "/src/assets/casa1.jpg",
    title: "Casa condomínio com 3 quartos",
    dorms: 4,
    vagas: 2,
    area: 560,
    city: "Palotina",
    price: "R$ 250.000,00",
  },
  {
    id: 4,
    image: "/src/assets/casa1.jpg",
    title: "Casa condomínio com 4 quartos",
    dorms: 4,
    vagas: 2,
    area: 560,
    city: "Palotina",
    price: "R$ 250.000,00",
  },
  {
    id: 5,
    image: "/src/assets/casa1.jpg",
    title: "Casa condomínio com 5 quartos",
    dorms: 4,
    vagas: 2,
    area: 560,
    city: "Palotina",
    price: "R$ 250.000,00",
  },
  {
    id: 6,
    image: "/src/assets/casa1.jpg",
    title: "Casa condomínio com 6 quartos",
    dorms: 4,
    vagas: 2,
    area: 560,
    city: "Palotina",
    price: "R$ 250.000,00",
  },
  {
    id: 7,
    image: "/src/assets/casa1.jpg",
    title: "Casa condomínio com 7 quartos",
    dorms: 4,
    vagas: 2,
    area: 560,
    city: "Palotina",
    price: "R$ 250.000,00",
  },
  {
    id: 8,
    image: "/src/assets/casa1.jpg",
    title: "Casa condomínio com 8 quartos",
    dorms: 4,
    vagas: 2,
    area: 560,
    city: "Palotina",
    price: "R$ 250.000,00",
  },
  {
    id: 9,
    image: "/src/assets/casa1.jpg",
    title: "Casa condomínio com 9 quartos",
    dorms: 4,
    vagas: 2,
    area: 560,
    city: "Palotina",
    price: "R$ 250.000,00",
  },
  {
    id: 10,
    image: "/src/assets/casa1.jpg",
    title: "Casa condomínio com 10 quartos",
    dorms: 4,
    vagas: 2,
    area: 560,
    city: "Palotina",
    price: "R$ 250.000,00",
  },
  {
    id: 11,
    image: "/src/assets/casa1.jpg",
    title: "Casa condomínio com 11 quartos",
    dorms: 4,
    vagas: 2,
    area: 560,
    city: "Palotina",
    price: "R$ 250.000,00",
  },
];

export default function FeaturedProperties() {
  return (
    <section className={styles.featured}>
      <img src="/src/assets/Component.png" /> 
      <div className={styles.header}>        
        <h2>
          <strong >
            IMÓVEIS
            <br />
            EM DESTAQUE
          </strong>
        </h2>
        <p>
          Conheça algumas das{" "}
          <strong>melhores oportunidades de negócios</strong> de imóveis na sua
          região.
        </p>
      </div>
      <CardCarousel>
        {properties.map((property) => (
          <div key={property.id} style={{ width: 300 }}>
            <PropertyCard {...property} />
          </div>
        ))}
      </CardCarousel>
    </section>
  );
}

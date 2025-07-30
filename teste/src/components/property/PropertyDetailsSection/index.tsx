import { getWhatsLink } from "../../Utils/getWhatsapp";
import { useLinks } from "../../Utils/LinksContext";
import styles from "./PropertyDetailsSection.module.css";
import {
  FaKey,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaHome,
  FaWhatsapp,
  FaCheckSquare,
} from "react-icons/fa";

type PropertyDetailsProps = {
  code: string | number;
  bedrooms: number;
  bathrooms: number;
  lotArea: string;
  builtArea: string;
  title: string;
  description: string;
  characteristics: string[];
  price: string;
  address: string;
  mapImage: string;
};

export default function PropertyDetailsSection(props: PropertyDetailsProps) {
  const links = useLinks();

  return (
    <section className={styles.root}>
      <div className={styles.headerInfo}>
        <div className={styles.infoBox}>
          <FaKey />
          <span>
            {props.code}
            <br />
            Código
          </span>
        </div>
        <div className={styles.infoBox}>
          <FaBed />
          <span>
            {props.bedrooms}
            <br />
            Quartos
          </span>
        </div>
        <div className={styles.infoBox}>
          <FaBath />
          <span>
            {props.bathrooms}
            <br />
            Banheiros
          </span>
        </div>
        <div className={styles.infoBox}>
          <FaRulerCombined />
          <span>
            {props.lotArea}
            <br />
            Área de terreno
          </span>
        </div>
        <div className={styles.infoBox}>
          <FaHome />
          <span>
            {props.builtArea}
            <br />
            Área construída
          </span>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.detailsGrid}>
          <div className={styles.left}>
            <h2 className={styles.title}>{props.title}</h2>
            <h3 className={styles.subtitle}>Sobre este imóvel</h3>
            <p className={styles.desc}>{props.description}</p>
            <h4 className={styles.characteristicsTitle}>Características</h4>
            <ul className={styles.characteristicsList}>
              {props.characteristics.map((item, i) => (
                <li key={i}>
                  <FaCheckSquare className={styles.icon} /> {item}
                </li>
              ))}
            </ul>
            <div className={styles.mapSection}>
              <h4 className={styles.mapTitle}>Localidade</h4>
              <img src={props.mapImage} alt="Mapa" className={styles.mapImg} />
              <div className={styles.mapAddress}>{props.address}</div>
            </div>
          </div>
          <aside className={styles.right}>
            <div className={styles.priceLabel}>
              Valor do imóvel:
              <br />
              <span className={styles.price}>{props.price}</span>
            </div>
            <h3 className={styles.contactTitle}>Estou interessado</h3>
            <form className={styles.form}>
              <input className={styles.input} placeholder="Nome" />
              <input className={styles.input} placeholder="Telefone/Whatsapp" />
              <a
                href={getWhatsLink(
                  `Olá, gostaria de agendar uma visita para o imóvel ${props.code}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsBtn}
              >
                Agende uma visita <FaWhatsapp style={{ marginLeft: 8 , fontSize: 20}} />
              </a>
              <a
                href={links.simular} 
                className={styles.financiamentoBtn}               
              >
                Simule seu Financiamento para este imóvel
              </a>
            </form>
          </aside>
        </div>
      </div>
    </section>
  );
}

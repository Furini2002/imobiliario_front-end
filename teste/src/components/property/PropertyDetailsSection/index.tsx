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
  loading?: boolean;
  status: number;
  code: number;
  bedrooms: number;
  bathrooms: number;
  lotArea: string;
  builtArea: string;
  title: string;
  description: string;
  characteristics: string[];
  price: string;
  address: string;
};

export default function PropertyDetailsSection(props: PropertyDetailsProps) {
  const links = useLinks();

  if (props.loading) {    
    return (
      <section className={styles.root} aria-busy="true" aria-live="polite">
        <div className={styles.headerInfo}>
          {[...Array(5)].map((_, i) => (
            <div key={i} className={styles.infoBox}>
              <div className={styles.skelIcon} />
              <span>
                <span className={styles.skelLineXs} />
                <br />
                <span className={styles.skelLineXs} />
              </span>
            </div>
          ))}
        </div>

        <div className={styles.body}>
          <div className={styles.detailsGrid}>
            <div className={styles.left}>
              <div className={styles.skelTitle} />
              <div className={styles.skelSubtitle} />
              <div className={styles.skelParagraph} />
              <div className={styles.skelParagraph} />
              <div className={styles.skelParagraphShort} />

              <div className={styles.skelSubtitle} style={{ marginTop: 20 }} />
              <ul className={styles.characteristicsList}>
                {[...Array(5)].map((_, i) => (
                  <li key={i} className={styles.skelChip} />
                ))}
              </ul>

              <div className={styles.mapSection}>
                <div className={styles.skelMap} />
                <div
                  className={styles.skelLine}
                  style={{ width: "50%", marginTop: 8 }}
                />
              </div>
            </div>

            <aside className={styles.right}>
              <div className={styles.skelPriceBlock}>
                <div className={styles.skelLine} style={{ width: "60%" }} />
                <div className={styles.skelPrice} />
              </div>
              <div className={styles.skelSubtitle} />
              <div className={styles.skelInput} />
              <div className={styles.skelInput} />
              <div className={styles.skelButton} />
              <div className={styles.skelButtonLight} />
            </aside>
          </div>
        </div>
      </section>
    );
  }

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

              {(() => {
                const key = import.meta.env.VITE_GOOGLE_MAPS_KEY as
                  | string
                  | undefined;
                const hasAddress =
                  !!props.address && props.address.trim().length > 0;

                if (!hasAddress) {
                  return (
                    <div className={styles.mapAddress}>
                      Endereço não informado.
                    </div>
                  );
                }

                const cleanAddress = props.address.replace(/\s+/g, " ").trim();
                const q = encodeURIComponent(cleanAddress);

                const srcWithKey = `https://www.google.com/maps/embed/v1/place?key=${key}&q=${q}`;

                const srcNoKey = `https://www.google.com/maps?q=${q}&output=embed`;

                const src = key ? srcWithKey : srcNoKey;

                return (
                  <>
                    <iframe
                      className={styles.mapFrame}
                      src={src}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      aria-label="Mapa do imóvel"
                    />
                    <div className={styles.mapAddress}>{props.address}</div>
                  </>
                );
              })()}
            </div>
          </div>
          <aside className={styles.right}>
            <div className={styles.priceLabel}>
              {props.status === 1
                ? "Valor do aluguel:"
                : props.status === 2
                ? "Valor do imóvel:"
                : "Valor:"}
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
                Agende uma visita{" "}
                <FaWhatsapp style={{ marginLeft: 8, fontSize: 20 }} />
              </a>
              <a href={links.simular} className={styles.financiamentoBtn}>
                Simule seu Financiamento para este imóvel
              </a>
            </form>
          </aside>
        </div>
      </div>
    </section>
  );
}

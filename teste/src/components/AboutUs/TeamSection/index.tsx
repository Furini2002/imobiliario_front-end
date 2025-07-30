import { getWhatsLink } from "../../Utils/getWhatsapp";
import styles from "./TeamSection.module.css";

export default function TeamSection() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>
          Contamos com uma equipe de especialistas{" "}
          <b>dedicados e apaixonados</b> por ajudar você a encontrar o imóvel
          ideal.
        </h2>
        <p>
          Entre em <b>contato</b> com um de nossos profissionais abaixo e
          descubra como podemos tornar seu sonho realidade!
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img
            src="/src/assets/washington.png"
            alt="Washington Sobrenome"
            className={styles.avatar}
          />
          <div className={styles.info}>
            <span className={styles.name}>Washington Sobrenome</span>
            <span className={styles.creci}>CRECI 963212</span>
            <a href={getWhatsLink("Olá, gostaria de falar com o Washington sobre imóveis da Mendes & Favaro. Poderia me ajudar?", '5544999885232')}>
              <span className={styles.phone}>(44) 99988-5232</span>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="/src/assets/isabeli.png"
            alt="Isabeli Sobrenome"
            className={styles.avatar}
          />
          <div className={styles.info}>
            <span className={styles.name}>Isabeli Sobrenome</span>
            <span className={styles.creci}>CRECI 963212</span>
            <a href={getWhatsLink("Olá, gostaria de falar com a Isabeli sobre imóveis da Mendes & Favaro. Poderia me ajudar?", '5544999885232')}>
              <span className={styles.phone}>(44) 99988-5232</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

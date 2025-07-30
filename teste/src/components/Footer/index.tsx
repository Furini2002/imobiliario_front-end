import styles from "./Footer.module.css";
import logo from "../../assets/logo-footer.png";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useLinks } from "../Utils/LinksContext";

export default function Footer() {
  const links = useLinks();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.logoArea}>
            <img src={logo} alt="Mendes & Favaro" className={styles.logo} />
          </div>

          <div className={styles.colContatos} id="contatos">
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Contato</div>
              <div className={styles.whatsapp}>
                <FaWhatsapp /> <span>(44) 96656-6633</span>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Endereço</div>
              <div className={styles.informacoes}>
                Av. Brigadeiro Faria Lima, 123
                <br />
                <span className={styles.city}>Francisco Alves, PR</span>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Horários de atendimento</div>
              <div className={styles.informacoes}>
                Segunda à sexta: 9:00 - 12:00 / 13:30 - 17:30
                <br />
                Sábado: 9:00 - 12:00
              </div>
            </div>
          </div>
          <div className={styles.colLinks}>
            <div className={styles.sectionTitle}>Links úteis</div>
            <ul className={styles.links}>
              <li className={styles.li}>
                <a href="/busca">Imóveis</a>
              </li>
              <li className={styles.li}>
                <a href={links.anunciar}>Anuncie aqui seu imóvel</a>
              </li>
              <li className={styles.li}>
                <a href={links.simular}>Simule seu financiamento</a>
              </li>
              <li className={styles.li}>
                <a href={links.sobrenos}>Sobre nós</a>
              </li>
            </ul>
          </div>
          <div className={styles.colMap}>
            <div className={styles.socials}>
              <a href={links.facebook} className={styles.social}>
                <FaFacebookF size={25} color="white" />
              </a>
              <a href={links.instagram} className={styles.social}>
                <FaInstagram size={25} color="white" />
              </a>
            </div>
            <div className={styles.map}>
              <iframe
                src="https://www.google.com/maps?q=Av.%20Brigadeiro%20Faria%20Lima,%20123%20Francisco%20Alves,%20PR&output=embed"
                width="100%"
                height="180"
                style={{ border: 0, borderRadius: 7 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Mendes e Favaro"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

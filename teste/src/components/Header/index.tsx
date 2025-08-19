import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import { useLinks } from "../Utils/LinksContext";
import { getWhatsLink } from "../Utils/getWhatsapp";

export default function Header() {
  const links = useLinks();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll(); // aplica estado inicial ao carregar a página
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href={links.home}>
            <img src={logo} alt="Logo da empresa" />
          </a>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <a href={links.sobrenos}>Sobre nós</a>
          <a href={links.anunciar}>Anuncie aqui seu imóvel</a>
          <a href={links.simular}>Simule seu Financiamento</a>

          <div className={styles.actionsMobile}>
            <a
              href={getWhatsLink("Olá, gostaria de falar com um consultor")}
              className={styles.whatsapp}
            >
              <FaWhatsapp size={20} /> Fale conosco
            </a>
          </div>
        </nav>

        <div className={styles.actions}>
          <a
            href={getWhatsLink("Olá, gostaria de falar com um consultor")}
            className={styles.whatsapp}
          >
            <FaWhatsapp size={20} /> Fale conosco
          </a>
          <a href={links.facebook} className={styles.social}>
            <FaFacebookF size={25} />
          </a>
          <a href={links.instagram} className={styles.social}>
            <FaInstagram size={25} />
          </a>
        </div>
      </div>
    </header>
  );
}

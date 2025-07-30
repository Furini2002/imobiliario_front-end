import React from "react";
import styles from "./HelpSection.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsLink } from "../../Utils/getWhatsapp";

const HelpSection: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.text}>
      <strong>Precisa de ajuda?</strong> Entre em contato agora pelo WhatsApp ou telefone!
    </div>
    <a
      href={getWhatsLink("Olá! Estou na página de simulação de financiamento e tenho algumas dúvidas. Poderia me ajudar?")}
      className={styles.whatsappBtn}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className={styles.icon} />
      Fale conosco
    </a>
  </section>
);

export default HelpSection;

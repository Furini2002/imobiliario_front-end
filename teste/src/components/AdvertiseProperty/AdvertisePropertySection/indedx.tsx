import React from "react";
import styles from "./AdvertisePropertySection.module.css";
import { FaCheckCircle, FaClipboardCheck, FaSearch } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const AdvertisePropertySection: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.left}>
      <h2>
        <span className={styles.bold}>Anuncie Seu Imóvel Conosco</span>
        <br />
        e Alcance os Melhores Resultados!
      </h2>
      <div className={styles.subtitle}>
        Porque anunciar com a Mendes & Favaro ?
      </div>
      <div className={styles.desc}>
        Anunciando na Mendes & Favaro, o ganho é que seu imóvel terá a visibilidade certa, alcançando o cliente ideal com a ajuda de uma equipe especializada e comprometida em tornar cada negociação rápida, segura e eficiente.
      </div>
      <div className={styles.benefitsTitle}>
        Benefícios de Anunciar Conosco
      </div>
      <div className={styles.benefitsGrid}>
        <div className={styles.benefitCard}>
          <FaClipboardCheck className={styles.benefitIcon} />
          <span>Mais visibilidade com parcerias nos principais portais</span>
        </div>
        <div className={styles.benefitCard}>
          <FaCheckCircle className={styles.benefitIcon} />
          <span>Equipe especializada para agilizar o processo</span>
        </div>
        <div className={styles.benefitCard}>
          <FaSearch className={styles.benefitIcon} />
          <span>Análise gratuita da documentação do imóvel</span>
        </div>
      </div>
      <div className={styles.stepsTitle}>Passos para Anunciar</div>
      <ol className={styles.stepsList}>
        <li>
          Preencher o formulário online ao lado.
        </li>
        <li>
          Nossa equipe entrará em contato para validação das informações.
        </li>
        <li>
          Seu imóvel será anunciado em nosso site e em canais parceiros.
        </li>
      </ol>
    </div>

    <form className={styles.form} onSubmit={e => e.preventDefault()} id="formulario">
      <div className={styles.formTitle}>
        Preencha suas informações e dados do imóvel para enviar!
      </div>
      <input placeholder="Nome completo" required />
      <input placeholder="Telefone" required />
      <div className={styles.formSectionTitle}>Informações do imóvel</div>
      <input placeholder="Tipo" required />
      <input placeholder="Endereço" required />
      <input placeholder="Tamanho" required />
      <input placeholder="Valor de venda ou locação" required />
      <textarea placeholder="Observações adicionais" rows={2} />
      <button type="submit" className={styles.submitButton}>Enviar para Avaliação</button>
      <div className={styles.support}>
        Qualquer dúvida entre em contato:
        <a
          href="https://wa.me/5544966566633"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsapp}
        >
          <FaWhatsapp className={styles.whatsIcon} />
          (44) 96656-6633
        </a>
      </div>
    </form>
  </section>
);

export default AdvertisePropertySection;

import React from "react";
import styles from "./FeaturesSectionAboustUs.module.css";

import imgMercado from "../../../assets/mercado-local.png";
import imgEquipe from "../../../assets/equipe.png";
import imgFinanciamento from "../../../assets/financiamento.png";

import logoCvale from "../../../assets/logo-cvale.png";
import logoAmelia from "../../../assets/logo-amelia.png";
import logoStilo from "../../../assets/logo-stilo.png";
import logoSaomateus from "../../../assets/logo-saomateus.png";
import CardCarouselLogos from "../CardCarouselLogos";

const features = [
  {
    img: imgMercado,
    title: "Expertise no mercado local",
    desc:
      "Com anos de experiência em Francisco Alves e Palotina, conhecemos as demandas da região. Oferecemos soluções personalizadas para atender às necessidades de cada cliente com eficiência.",
  },
  {
    img: imgEquipe,
    title: "Equipe qualificada",
    desc: "Iremos acompanhar você em todos os passos da sua jornada.",
  },
  {
    img: imgFinanciamento,
    title: "Parcerias Confiáveis para Financiamento",
    desc:
      "Trabalhamos com bancos e instituições financeiras de confiança, garantindo financiamento seguro e ágil, adaptado ao seu perfil.",
  },
];

const valores = [
  {
    title: "Por que a empresa existe?",
    desc: "Conectar pessoas ao imóvel ideal, com qualidade e confiança.",
  },
  {
    title: "Onde a empresa quer chegar?",
    desc: "Ser a principal referência imobiliária no interior do Paraná.",
  },
  {
    title: "O que a empresa prioriza?",
    desc:
      "Transparência, ética, compromisso com o cliente e excelência no atendimento.",
  },
];

const partners = [
  { img: logoCvale, alt: "Cvale" },
  { img: logoAmelia, alt: "Amélia Residencial" },
  { img: logoStilo, alt: "Stilo" },
  { img: logoSaomateus, alt: "São Mateus" },
];

const FeaturesSectionAboustUs: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.featuresTitle}>
      Aqui na <strong>Imobiliária Mendes e Favaro</strong> você encontra ...
    </div>
    <div className={styles.featuresGrid}>
      {features.map((f) => (
        <div className={styles.feature} key={f.title}>
          <img src={f.img} alt={f.title} className={styles.featureImg} />
          <div className={styles.featureTitle}>{f.title}</div>
          <div className={styles.featureDesc}>{f.desc}</div>
        </div>
      ))}
    </div>

    <div className={styles.featuresTitle}>
      Um pouco de nossa <strong>missão, visão e valores ...</strong>
    </div>

    <div className={styles.valoresGrid}>
      {valores.map((v) => (
        <div className={styles.valorCard} key={v.title}>
          <div className={styles.valorTitle}>{v.title}</div>
          <div className={styles.valorDesc}>{v.desc}</div>
        </div>
      ))}
    </div>

    <div className={styles.partnersTitle}>
      <strong>Parcerias estratégicas</strong> que garantem{" "}
      <strong>confiança</strong> e as melhores condições para você.
    </div>

    <div className={styles.partnersGrid} data-desktop>
      {partners.map((p) => (
        <img
          src={p.img}
          alt={p.alt}
          className={styles.partnerLogo}
          key={p.alt}
        />
      ))}
    </div>

    <div className={styles.partnersCarousel} data-mobile>
      <CardCarouselLogos>
        {partners.map((p) => (
          <img
            src={p.img}
            alt={p.alt}
            className={styles.partnerLogo}
            key={p.alt}
          />
        ))}
      </CardCarouselLogos>
    </div>
  </section>
);

export default FeaturesSectionAboustUs;

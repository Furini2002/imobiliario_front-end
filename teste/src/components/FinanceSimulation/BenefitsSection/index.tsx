import React from "react";
import styles from "./BenefitsSection.module.css";

const benefits = [
  "Simulação gratuita e personalizada para seu financiamento.",
  "Praticidade e rapidez no envio da melhor opção de crédito.",
  "Economize tempo e descubra as condições que cabem no seu bolso."
];

const BenefitsSection: React.FC = () => (
  <section className={styles.section}>
    <h2 className={styles.title}>
      Benefícios de Simular com a Imobiliária
    </h2>
    <div className={styles.cards}>
      {benefits.map((b, i) => (
        <div className={styles.card} key={i}>
          {b}
        </div>
      ))}
    </div>
  </section>
);

export default BenefitsSection;

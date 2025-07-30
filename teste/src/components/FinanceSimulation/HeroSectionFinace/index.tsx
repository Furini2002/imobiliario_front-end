import React from "react";
import styles from "./HeroSectionFinance.module.css";
import bgImg from "../../../assets/financeSimulation.png";

const HeroFinanceSimulation: React.FC = () => (
  <section
    className={styles.simulationSection}
    style={{ backgroundImage: `url(${bgImg})` }}
  >
    <div className={styles.overlay}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Simule Agora o <br /> Financiamento do Seu Imóvel!
        </h2>
        <a
          href="#simulador"
          className={styles.button}
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector("#simulador");
            if (el) el.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => {
              const input = el?.querySelector("input");
              if (input) (input as HTMLInputElement).focus();
            }, 400);
          }}
        >
          Solicitar simulação
        </a>
      </div>
    </div>
  </section>
);

export default HeroFinanceSimulation;

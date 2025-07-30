import React from "react";
import styles from "./NotFoundPage.module.css";

const NotFoundPage: React.FC = () => (
  <section className={styles.container}>
    <div className={styles.card}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Página não encontrada</h2>
      <p className={styles.text}>
        O imóvel que você procura não foi encontrado ou não está mais disponível.<br />
        Mas não se preocupe, temos várias opções esperando por você!
      </p>
      <a href="/" className={styles.button}>
        Voltar para a página inicial
      </a>
    </div>
  </section>
);

export default NotFoundPage;

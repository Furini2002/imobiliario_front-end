import React from "react";
import styles from "./HeroSectionAbout.module.css";
import teamImg from "../../../assets/team.png"; 

const HeroSectionAbout: React.FC = () => (
  <section className={styles.heroSectionAbout}>
    <div className={styles.imgWrapper}>
      <img src={teamImg} alt="Equipe Mendes & Favaro" className={styles.img} />
    </div>
    <div className={styles.content}>
      <h2 className={styles.title}>
        Mais <strong>de 6 anos</strong> ajudando famílias a encontrar seus lares.
      </h2>
      <div className={styles.text}>
        <p>
          Na <strong>Mendes & Favaro</strong>, acreditamos que cada imóvel é um passo rumo ao <strong>futuro</strong>. Desde 2017, oferecemos <strong>soluções personalizadas</strong> para atender às necessidades de cada cliente, tornando o processo de compra e venda mais simples e transparente.
        </p><br></br>
        <p>
          Com uma trajetória marcada pela <strong>confiança e dedicação</strong>, já ajudamos mais de <strong>500 famílias</strong> a realizarem o sonho da casa própria. Nossa atuação em Francisco Alves, Palotina e região nos tornou <strong>referência no mercado</strong>, com uma <strong>taxa de satisfação de 95%</strong> e mais de <strong>300 imóveis negociados com sucesso</strong>. Além disso, oferecemos <strong>parcerias confiáveis</strong> com instituições financeiras para facilitar o financiamento e garantir <strong>condições que atendam ao seu perfil</strong>. Esses números e serviços refletem nosso compromisso em entregar excelência e construir relações de confiança com cada cliente.
        </p>
      </div>
    </div>
  </section>
);

export default HeroSectionAbout;

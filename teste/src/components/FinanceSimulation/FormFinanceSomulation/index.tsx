import React from "react";
import styles from "./FormFinanceSimulation.module.css";
import keysImg from "../../../assets/keys.png";

const FormFinanceSimulation: React.FC = () => (
  <section className={styles.howItWorksSection}>
    <div className={styles.processBlock}>
      <div className={styles.processSteps}>
        <h2>Como Funciona</h2>
        <span className={styles.subtitle}>Facilitamos o processo para você</span>
        <ol>
          <li>
            <span className={styles.stepNumber}>01</span>
            <div>
              <span className={styles.stepTitle}>Preencher o formulário</span>
              <br />
              <span className={styles.stepDesc}>
                Compartilhe suas informações pessoais e preferências de pagamento.
              </span>
            </div>
          </li>
          <li>
            <span className={styles.stepNumber}>02</span>
            <div>
              <span className={styles.stepTitle}>Receba uma avaliação</span>
              <br />
              <span className={styles.stepDesc}>
                Vamos analisar seu perfil e apresentar as melhores opções de financiamento disponíveis no mercado, adaptadas aos seus objetivos financeiros.
              </span>
            </div>
          </li>
          <li>
            <span className={styles.stepNumber}>03</span>
            <div>
              <span className={styles.stepTitle}>Escolha a melhor opção</span>
              <br />
              <span className={styles.stepDesc}>
                Com nossa análise, você terá todos os dados para escolher a proposta mais vantajosa.
              </span>
            </div>
          </li>
        </ol>
      </div>
      <div className={styles.processImgBlock}>
        <img src={keysImg} alt="Entrega de chaves" className={styles.processImg} />
      </div>
    </div>

    <form className={styles.simulationForm} onSubmit={e => e.preventDefault()} id="simulador">
      <div className={styles.formTitle}>
        Preencha e descubra suas opções de financiamento
      </div>
      <div className={styles.formSectionTitle}>Seus dados</div>
      <input placeholder="Nome" required />
      <input placeholder="Telefone" required />
      <input placeholder="CPF" required />
      <input placeholder="Data de nascimento" type="date" required />
      <div className={styles.formSectionTitle}>Valor do imóvel</div>
      <input placeholder="R$" required />
      <div className={styles.formSectionTitle}>
        Valor de entrada
        <span className={styles.inputHint}>Vai usar seu FGTS? Coloque aqui também</span>
      </div>
      <input placeholder="R$" required />
      <div className={styles.formSectionTitle}>
        Qual sua renda mensal?
        <span className={styles.inputHint}>
          Comprando com mais alguém? Some as rendas.
        </span>
      </div>
      <input placeholder="R$" required />
      <button type="submit" className={styles.submitButton}>Enviar Simulação</button>
    </form>
  </section>
);

export default FormFinanceSimulation;

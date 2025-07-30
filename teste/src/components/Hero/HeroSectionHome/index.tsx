import Button from '../../shared/Button';
import Select from '../../shared/Select';
import styles from './HeroSection.module.css';

export default function HeroSectionHome() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Realizando Seu Sonho de Morar Bem</h1>
        <form className={styles.searchForm}>
          <Select label="Eu quero" options={["Comprar", "Alugar"]} name="tipo" />
          <Select label="Cidade" options={["Palotina", "Francisco Alves"]} name="city" />
          <Select label="Tipo de imóvel" options={["Casa", "Apartamento"]} name="type" />

          <Button onClick={() => console.log('Buscar')} type="primary">Buscar</Button>  
        </form>
      </div>
    </section>
  );
}
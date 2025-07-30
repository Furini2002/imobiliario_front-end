import styles from './Select.module.css'

type SelectProps = {
    label: string;
    options: string[];
    name?: string;
  };
  
  export default function Select({ label, options, name }: SelectProps) {
    return (
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={name}>{label}</label>
        <select name={name} id={name} className={styles.box}>
          {options.map((option, index) => (
            <option key={index} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
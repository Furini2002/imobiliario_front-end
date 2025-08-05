import styles from './Select.module.css'

type Option = {
  value: string | number; 
  label: string;          
};

type SelectProps = {
    label: string;
    options: Option[];
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  };
  
  export default function Select({ label, options, name, onChange }: SelectProps) {
    return (
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={name}>{label}</label>
        <select name={name} id={name} className={styles.box} onChange={onChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
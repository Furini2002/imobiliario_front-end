import styles from './Button.module.css';
import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, type = 'primary', onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, styles[type], className)}
    >
      {children}
    </button>
  );
}

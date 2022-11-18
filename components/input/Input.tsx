import styles from './input.module.scss';
import type { HTMLInputTypeAttribute, ChangeEvent } from 'react';

type InputProps = {
  type: HTMLInputTypeAttribute;
  disabled?: boolean;
  name?: string;
  id?: string;
  label?: string;
  icon?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  type = 'text',
  disabled = false,
  name,
  id,
  label,
  icon,
  placeholder,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className={styles.input}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        className={styles[type]}
      />
    </div>
  );
};

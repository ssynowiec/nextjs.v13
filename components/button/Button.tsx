import type { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Comfortaa } from '@next/font/google';

const comfortaa = Comfortaa({ weight: '400' });

import styles from './button.module.scss';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  name?: string;
  style?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary' | 'tertiary' | 'white' | 'dark';
  onClick?: () => void;
  children: ReactNode;
};

export const Button = ({
  type = 'button',
  disabled = false,
  name,
  style = 'contained',
  color = 'primary',
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        comfortaa.className,
        styles.button,
        disabled && styles.disabled,
        type === 'reset' && styles.reset,
        type === 'submit' && styles.submit,
        styles[style],
        styles[color],
      )}
      type={type}
      disabled={disabled}
      name={name}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

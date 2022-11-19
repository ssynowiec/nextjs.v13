import Link from 'next/link';
import type { ReactNode } from 'react';

import styles from './link.module.scss';

type LinkProps = {
  type?: 'button' | 'link';
  href: string;
  children: ReactNode;
};

export const StyledLink = ({ type = 'link', href, children }: LinkProps) => {
  return (
    <Link href={href} className={styles[type]}>
      {children}
    </Link>
  );
};

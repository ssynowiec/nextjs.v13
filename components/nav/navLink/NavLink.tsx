import styles from './navLink.module.scss';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export const NavLink = ({ href, children }: NavLinkProps) => {
  const path = usePathname();

  return (
    <li
      className={clsx(
        styles.navItem,
        path === href && styles['navItem--active'],
      )}
    >
      <Link href={href} className={styles.navLink}>
        {children}
      </Link>
    </li>
  );
};

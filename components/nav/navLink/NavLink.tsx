import styles from './navLink.module.scss';
import Link from 'next/link';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  label: string;
};

export const NavLink = ({ href, label }: NavLinkProps) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        styles.navLink,
        path === href && styles['navLink--active'],
      )}
    >
      {label}
    </Link>
  );
};

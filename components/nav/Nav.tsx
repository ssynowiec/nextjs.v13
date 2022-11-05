import styles from './nav.module.scss';
import Link from 'next/link';
import { useHeaderContext } from '../../context/headerContext';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';

export const Nav = () => {
  const { isMenuVisible } = useHeaderContext();
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={clsx(styles.navList, !isMenuVisible && styles.menuHidden)}>
        <Link
          href={'/'}
          className={clsx(
            styles.navLink,
            path === '/' && styles['navLink--active'],
          )}
        >
          Home
        </Link>
        <Link
          href={'/blog'}
          className={clsx(
            styles.navLink,
            path === '/blog' && styles['navLink--active'],
          )}
        >
          Blog
        </Link>
        <Link
          href={'/aboutme'}
          className={clsx(
            styles.navLink,
            path === '/aboutme' && styles['navLink--active'],
          )}
        >
          About me
        </Link>
        <Link
          href={'/'}
          className={clsx(
            styles.navLink,
            path === '/bbb' && styles['navLink--active'],
          )}
        >
          Home
        </Link>
        <Link
          href={'/contact'}
          className={clsx(
            styles.navLink,
            path === '/contact' && styles['navLink--active'],
          )}
        >
          Kontakt
        </Link>
      </ul>
    </nav>
  );
};

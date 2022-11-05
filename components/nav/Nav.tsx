import styles from './nav.module.scss';
import { useHeaderContext } from '../../context/headerContext';
import { clsx } from 'clsx';
import { NavLink } from './navLink/NavLink';

export const Nav = () => {
  const { isMenuVisible } = useHeaderContext();

  return (
    <nav className={styles.nav} id='navigation'>
      <div
        className={clsx(styles.navList, !isMenuVisible && styles.menuHidden)}
      >
        <NavLink href='/' label='Home' />
        <NavLink href='/blog' label='Blog' />
        <NavLink href='/aboutme' label='About me' />
        <NavLink href='/bbb' label='Page' />
        <NavLink href='/contact' label='Kontakt' />
      </div>
    </nav>
  );
};

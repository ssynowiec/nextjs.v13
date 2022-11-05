'use client';

import styles from './nav.module.scss';
import { useHeaderContext } from '../../context/headerContext';
import { clsx } from 'clsx';
import { NavLink } from './navLink/NavLink';

export const Nav = () => {
  const { isMenuVisible } = useHeaderContext();

  return (
    <nav className={styles.nav} id='navigation'>
      <ul className={clsx(styles.navList, !isMenuVisible && styles.menuHidden)}>
        <NavLink href='/' children='Home' />
        <NavLink href='/blog' children='Blog' />
        <NavLink href='/aboutme' children='About me' />
        <NavLink href='/bbb' children='Page' />
        <NavLink href='/contact' children='Contact' />
      </ul>
    </nav>
  );
};

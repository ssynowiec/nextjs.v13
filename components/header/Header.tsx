import Image from 'next/image';
import Link from 'next/link';
import { Nav } from '../nav/Nav';
import { memo } from 'react';
import { Josefin_Slab } from '@next/font/google';
import logo from '../../public/logo/logo.svg';
import styles from './Header.module.scss';
import { HeaderProvider } from '../../context/headerContext';
import { HamburgerButton } from '../nav/hamburgerButton/HamburgerButton';
import { clsx } from 'clsx';

const josefin = Josefin_Slab({ weight: '700' });

export const Header = memo(() => {
  return (
    <HeaderProvider>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.topSection}>
            <Link href={'/'} className={styles.logoLink}>
              <Image
                className={styles.logoImg}
                src={logo}
                width={70}
                height={70}
                alt=''
              />
              <p className={clsx(josefin.className, styles.logoText)}>KUKUN</p>
            </Link>
            <HamburgerButton />
          </div>
          <Nav />
        </div>
      </header>
    </HeaderProvider>
  );
});

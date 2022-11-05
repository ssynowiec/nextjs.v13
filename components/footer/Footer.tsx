import styles from './footer.module.scss';
import Image from 'next/image';
import logo from '../../public/logo/logo.svg';
import { Josefin_Slab } from '@next/font/google';
import { clsx } from 'clsx';

const josefin = Josefin_Slab({ weight: '700' });

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <p className={styles.copyrights}>
          &copy; 2022 &nbsp;
          <a
            href='https://vercel.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className={clsx(josefin.className, styles.logo)}>
              {/*<Image src={logo} alt='Vercel Logo' width={25} height={25} />*/}
              KUKUN
            </span>{' '}
          </a>
          &nbsp; All rights reserved.
        </p>
      </div>
    </footer>
  );
};

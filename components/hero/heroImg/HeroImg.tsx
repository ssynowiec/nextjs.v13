import styles from './heroImg.module.scss';
import type { ReactNode } from 'react';
import Image from 'next/image';
import heroImage from '../../../public/images/hero--medium.jpg';
import scrollDown from '../../../public/icons/scroll-down.png';
import Link from 'next/link';

type HeroImgProps = {
  children: ReactNode;
};

export const HeroImg = () => {
  return (
    <>
      <div className={styles.heroImgSection}>
        <Image className={styles.heroImg} src={heroImage} alt={'Hero Image'} />
        <div className={styles.heroImgShadow}></div>
        {/*<Link className={styles.scrollDown} href={'/#about'}>*/}
        {/*  <Image src={scrollDown} alt={''} />*/}
        {/*  <span className='visually-hidden'>Scroll to about me</span>*/}
        {/*</Link>*/}
      </div>
    </>
  );
};

import { HeroImg } from './heroImg/HeroImg';
import { HeroTitle } from './heroTitle/HeroTitle';

import styles from './hero.module.scss';

export const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <HeroImg />
        <HeroTitle />
      </section>
    </>
  );
};

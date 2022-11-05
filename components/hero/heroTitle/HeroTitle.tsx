import styles from './heroTitle.module.scss';

export const HeroTitle = () => {
  return (
    <div className={styles.heroTitleSection}>
      <h1 className={styles.heroTitle}>Hero Title</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        nisi elit, fermentum at iaculis at, commodo a ligula.
      </p>
    </div>
  );
};

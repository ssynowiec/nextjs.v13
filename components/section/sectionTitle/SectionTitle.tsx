import styles from './sectionTitle.module.scss';

export type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <p className={styles.sectionSubtitle}>{subtitle}</p>
    </>
  );
};

'use client';

import { SectionTitle } from './sectionTitle/SectionTitle';
import type { ReactNode } from 'react';
import type { SectionTitleProps } from './sectionTitle/SectionTitle';
import { clsx } from 'clsx';

import styles from './section.module.scss';

type SectionProps = SectionTitleProps & {
  style?: 'default' | 'dark';
  children: ReactNode;
};

export const Section = ({
  title,
  subtitle,
  style = 'default',
  children,
}: SectionProps) => {
  return (
    <section className={clsx(styles.section, styles[style])}>
      <div className={styles.container}>
        <SectionTitle title={title} subtitle={subtitle} />
        {children}
      </div>
    </section>
  );
};

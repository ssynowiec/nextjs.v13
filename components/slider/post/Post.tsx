'use client';

import styles from './post.module.scss';
import Link from 'next/link';

export type PostProps = {
  id?: string | number;
  title?: string;
  description?: string;
  link: string;
  date?: string;
  category?: string[] | 'uncategorized';
  thumb: string;
};

export const Post = ({
  id,
  title,
  description,
  link,
  date,
  category = 'uncategorized',
  thumb,
}: PostProps) => {
  // const postsSlides = console.log(postsSlides);
  return (
    <Link href={link} className={styles.post}>
      <div className={styles.thumbnailContainer}>
        <img src={thumb} alt='post' className={styles.thumbnail} />
      </div>
      <h3 className={styles.postTitle}>{title}</h3>
      <div className={styles.postDetails}>
        <p className={styles.postDetail}>
          <span className='material-symbols-outlined'>event</span>
          {date}
        </p>

        <p className={styles.postDetail}>
          <span className='material-symbols-outlined'>timer</span>3 min
        </p>
      </div>
      <div className={styles.postDetails}>
        <p className={styles.postDetail}>
          <span className='material-symbols-outlined'>sell</span>
          {category !== 'uncategorized' ? category?.join(', ') : category}
        </p>
      </div>
    </Link>
  );
};

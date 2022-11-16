'use client';

import { SwiperSlide } from 'swiper/react';
import styles from './posts.module.scss';

type Post = {
  id?: string;
  title?: string;
  description?: string;
  link?: string;
  thumb: string;
};

const PostsData: Post[] = [
  { thumb: 'https://picsum.photos/300/200?random=1' },
  { thumb: 'https://picsum.photos/300/200?random=2' },
  { thumb: 'https://picsum.photos/300/200?random=3' },
  { thumb: 'https://picsum.photos/300/200?random=4' },
  { thumb: 'https://picsum.photos/300/200?random=5' },
  { thumb: 'https://picsum.photos/300/200?random=6' },
  { thumb: 'https://picsum.photos/300/200?random=7' },
  { thumb: 'https://picsum.photos/300/200?random=8' },
];

export const Posts = () => {
  const postsSlides = PostsData.map((post: Post) => (
    <SwiperSlide className={styles.post}>
      <img src={post.thumb} alt='post' />
    </SwiperSlide>
  ));
  console.log(postsSlides);
  return <>{postsSlides}</>;
};

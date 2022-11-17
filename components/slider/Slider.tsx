'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';

import styles from './slider.module.scss';
import 'swiper/scss';
import 'swiper/scss/scrollbar';
import { Post } from './post/Post';
import type { PostProps } from './post/Post';
import { Button } from '../button/Button';

const PostsData: PostProps[] = [
  {
    id: 1,
    title: 'Hello World!',
    link: 'https:',
    thumb: 'https://picsum.photos/450/250?random=1',
    category: ['news', 'hello World'],
    date: 'listopad 17, 2022',
  },
  {
    id: 2,
    title: 'Hello World!',
    link: 'https:',
    thumb: 'https://picsum.photos/450/250?random=2',
    date: 'listopad 17, 2022',
  },
  {
    id: 3,
    title: 'Hello World!',
    link: 'https:',
    thumb: 'https://picsum.photos/450/250?random=3',
    category: ['news'],
    date: 'listopad 17, 2022',
  },
  {
    id: 4,
    title: 'Hello World!',
    link: 'https:',
    thumb: 'https://picsum.photos/450/250?random=4',
    category: ['news', 'hello World'],
    date: 'listopad 17, 2022',
  },
  {
    id: 5,
    title: 'Hello World!',
    link: 'https:',
    thumb: 'https://picsum.photos/450/250?random=5',
    category: ['news', 'hello World'],
  },
  {
    id: 6,
    title: 'Hello World!',
    link: 'https:',
    thumb: 'https://picsum.photos/450/250?random=6',
    category: ['news', 'hello World'],
  },
  {
    id: 7,
    title: 'Hello World!',
    link: 'https:',
    thumb: 'https://picsum.photos/450/250?random=7',
    category: ['news', 'hello World'],
  },
  {
    id: 8,
    title: 'Hello World!',
    link: 'https:',
    thumb: 'https://picsum.photos/450/250?random=8',
    category: ['news', 'hello World'],
  },
];

export const Slider = () => {
  return (
    <div className={styles.slider}>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
        }}
        className='mySwiper'
      >
        {PostsData.map((post: PostProps) => (
          <SwiperSlide className={styles.post} key={post.id}>
            <Post key={post.id} {...post} />
          </SwiperSlide>
        ))}
        <SwiperSlide className={styles.lastSlide}>
          <Button>Show more</Button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

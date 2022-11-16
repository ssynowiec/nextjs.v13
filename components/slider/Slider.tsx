'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import type { ReactNode } from 'react';

import styles from './slider.module.scss';
import 'swiper/scss';
import 'swiper/scss/scrollbar';

type SliderProps = {
  children: ReactNode;
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

export const Slider = ({ children }: SliderProps) => {
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
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={swiper => console.log(swiper)}
        className='mySwiper'
      >
        {PostsData.map((post: Post) => (
          <SwiperSlide className={styles.post}>
            <img src={post.thumb} alt='post' />
          </SwiperSlide>
        ))}
        {/*{children}*/}
        {/*<SwiperSlide>Slide 1</SwiperSlide>*/}
        {/*<SwiperSlide>Slide 2</SwiperSlide>*/}
        {/*<SwiperSlide>Slide 3</SwiperSlide>*/}
        {/*<SwiperSlide>Slide 4</SwiperSlide>*/}
        {/*<SwiperSlide>Slide 4</SwiperSlide>*/}
        {/*<SwiperSlide>Slide 4</SwiperSlide>*/}
        {/*<SwiperSlide>Slide 4</SwiperSlide>*/}
      </Swiper>
    </div>
  );
};

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Typography } from '@/ui-kit';
import styles from './Carousel.module.scss';

const Slide = () => {
  return (
    <SwiperSlide>
      <Link href="/" className={styles.slide}>
        <div className={styles.iconWrapper}>
          <Image src={`/icons/gastroenterologist.svg`} alt="icon" width={50} height={50} />
        </div>
        <Typography component="h4" className={styles.slideText} weight="medium">
          Гастроентеролог
        </Typography>
      </Link>
    </SwiperSlide>
  );
};

export const Carousel = () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={6}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
    </Swiper>
  );
};

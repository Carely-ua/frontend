'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { Typography } from '@/ui-kit';
import styles from './Carousel.module.scss';

const Slide = () => {
  return (
    <SwiperSlide>
      <Link href="/" className={styles.slide}>
        <div className={styles.iconWrapper}>
          <Image src="/images/gastroenterologist.svg" width={50} height={50} alt="doctor" />
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
      className="top-services-carousel"
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

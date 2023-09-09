'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import classnames from 'classnames';
import { MOBILE_WIDTH } from '@/utils';
import styles from './AboutClinic.module.scss';

const Slide = () => {
  return (
    <div className={styles.slide}>
      <Image
        className={styles.slideImage}
        src="/images/clinic-image.jpeg"
        layout="fill"
        objectFit="cover"
        alt="clinic"
      />
    </div>
  );
};

export const ClinicSlider = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className={classnames('clinic-slider', styles.clinicSlider)}
      spaceBetween={12}
      slidesPerView={2}
      breakpoints={{
        [MOBILE_WIDTH]: {
          slidesPerView: 6,
          spaceBetween: 16,
        },
      }}
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

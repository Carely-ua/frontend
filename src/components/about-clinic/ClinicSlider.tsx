'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import classnames from 'classnames';
import styles from './AboutClinic.module.scss';

const Slide = () => {
  return (
    <Image
      className={styles.slideImage}
      src="/images/clinic-image.jpeg"
      width={270}
      height={270}
      alt="clinic"
    />
  );
};

export const ClinicSlider = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className={classnames('clinic-slider', styles.clinicSlider)}
      spaceBetween={16}
      slidesPerView={6}
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

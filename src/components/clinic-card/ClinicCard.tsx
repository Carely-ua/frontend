import { FC } from 'react';
import Image from 'next/image';
import { ClinicTypes } from '@/services';
import { Typography } from '@/ui-kit';
import styles from './ClinicCard.module.scss';

const Rating = () => {
  return (
    <div className={styles.ratingWrap}>
      <div className={styles.rating}>
        <Image
          className={styles.ratingIcon}
          src="/icons/star.svg"
          alt="rating"
          width="16"
          height="16"
        />
        <Typography component="p" color="white">
          5
        </Typography>
      </div>
      <Typography component="p" color="secondary">
        664 відгуків
      </Typography>
    </div>
  );
};

export const ClinicCard: FC<NonNullable<ClinicTypes.Clinic>> = () => {
  return (
    <div className={styles.card}>
      <div className={styles.mainSection}>
        <div className={styles.image}>
          <Image src="/images/clinic-image.png" alt="clinic" width="160" height="160" />
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <Typography component="h3">Медичний центр «MED OK»</Typography>
            <Rating />
          </div>
          <Typography component="p" color="dark-grey" gutterBottom="md">
            Кардіолог, ортопед , УЗД щитовидка, УЗД серця, УЗД січовивідної системи, УЗД молочна
            залоза
          </Typography>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div>
          <div className={styles.extraInfo}>
            <span className={styles.icon}>
              <Image src="/icons/location.svg" alt="location" width="16" height="16" />
            </span>
            <Typography component="p">
              вулиця Пирогова, 34, Вінниця, Вінницька область, 21000
            </Typography>
          </div>
          <div className={styles.extraInfo}>
            <span className={styles.icon}>
              <Image src="/icons/time.svg" alt="time" width="16" height="16" />
            </span>
            <Typography component="p" color="dark-grey">
              з 9:00-17:00
            </Typography>
          </div>
        </div>
        <div>button</div>
      </div>
    </div>
  );
};

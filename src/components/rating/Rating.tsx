import { FC } from 'react';
import Image from 'next/image';
import { Typography } from '@/ui-kit';
import styles from './Rating.module.scss';

export interface RatingProps {
  rating: number;
  reviewAmount: number;
}

export const Rating: FC<RatingProps> = ({ rating, reviewAmount }) => {
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
          {rating}
        </Typography>
      </div>
      <Typography component="p" color="secondary">
        {reviewAmount} відгуків
      </Typography>
    </div>
  );
};

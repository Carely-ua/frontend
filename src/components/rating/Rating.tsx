import { FC } from 'react';
import { Typography } from '@/ui-kit';
import { SVG } from '../svg';
import styles from './Rating.module.scss';

export interface RatingProps {
  rating?: number | null;
  reviewAmount: number;
}

export const Rating: FC<RatingProps> = ({ rating = 0, reviewAmount }) => {
  return (
    <div className={styles.ratingWrap}>
      <div className={styles.rating}>
        <SVG.Star className={styles.ratingIcon} width="16" height="16" />
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

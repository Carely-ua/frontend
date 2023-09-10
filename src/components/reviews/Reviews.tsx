import { FC } from 'react';
import { Typography } from '@/ui-kit';
import { ClinicTypes } from '@/services';
import { SVG } from '../svg';
import styles from './Reviews.module.scss';

const ReviewItem: FC<ClinicTypes.Review> = ({ text, rate }) => {
  return (
    <div className={styles.review}>
      <Typography component="h3" weight="medium">
        {text}
      </Typography>
      <div className={styles.reviewInfo}>
        <div className={styles.rating}>
          <SVG.Star width={32} height={32} />
          <Typography component="h3" color="secondary">
            {rate}
          </Typography>
        </div>
        <Typography component="p" color="dark-grey">
          20.03.21
        </Typography>
      </div>
    </div>
  );
};

export interface ReviewsProps {
  rating?: number | null;
  reviewsCount?: number | null;
  reviews?: ClinicTypes.Reviews;
}

export const Reviews: FC<ReviewsProps> = ({ reviews, reviewsCount, rating }) => {
  return (
    <div className={styles.reviews}>
      <div className={styles.header}>
        <div className={styles.headerBlock}>
          <div className={styles.headerItem}>
            <Typography component="p" color="dark-grey">
              Рейтинг
            </Typography>
            <div className={styles.rating}>
              <SVG.Star />
              <Typography component="h3" color="secondary">
                {rating}
              </Typography>
            </div>
          </div>
          <div className={styles.headerItem}>
            <Typography component="p" color="dark-grey">
              К-сть відгуків
            </Typography>
            <Typography component="h3" color="secondary">
              {reviewsCount}
            </Typography>
          </div>
        </div>
        <div className={styles.alert}>
          <Typography component="p" color="dark-grey">
            Відгуки можуть залишати тільки ті клієнти, які скористалися послугою
          </Typography>
          <div>
            <SVG.Message width={40} height={40} />
          </div>
        </div>
      </div>
      {!reviews || reviews.length === 0 ? (
        <Typography component="h3" color="dark-grey" className={styles.noReviewsText}>
          Наразі відгуків ще немає
        </Typography>
      ) : (
        reviews.map(item => {
          if (!item) return null;

          return <ReviewItem key={item.id} {...item} />;
        })
      )}
    </div>
  );
};

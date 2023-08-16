'use client';

import { useModalContext } from '@/utils/client';
import { Typography } from '@/ui-kit';
import styles from './ClientServices.module.scss';

export const AddReviewButton = () => {
  const { openModal } = useModalContext();

  const clickHandler = () => {
    console.log('HELLO');
    openModal('AddReviewModal');
  };

  return (
    <Typography
      onClick={clickHandler}
      className={styles.feedbackButton}
      component="p"
      color="primary">
      Залишити відгук
    </Typography>
  );
};

'use client';

import { FC } from 'react';
import { useModalContext } from '@/utils/client';
import { Typography } from '@/ui-kit';
import styles from './ClientServices.module.scss';

interface AddReviewButtonProps {
  serviceId: string;
  doctorId?: string;
  clinicId: string;
}

export const AddReviewButton: FC<AddReviewButtonProps> = props => {
  const { openModal } = useModalContext();

  const clickHandler = () => {
    openModal('AddReviewModal', props);
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

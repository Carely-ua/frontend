import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Textarea, Typography } from '@/ui-kit';
import { Modal } from '../modal';
import { ModalComponent } from '..';
import styles from './AddReviewModal.module.scss';

export interface AddReviewModalProps {
  serviceId: string;
  doctorId: string;
}

export const AddReviewModal: ModalComponent<AddReviewModalProps> = ({
  handleClose,
  modalProps,
  open,
}) => {
  const t = useTranslations('AddReviewModal');
  const [value, setValue] = useState<number | null>(null);

  return (
    <Modal handleClose={handleClose} open={open}>
      <div className={styles.addReviewModal}>
        <div className={styles.header}>
          <Typography component="h2" color="white">
            {t('title')}
          </Typography>
        </div>
        <div className={styles.content}>
          <div className={styles.ratingBlock}>
            <Typography component="p" gutterBottom="xlg">
              {t('ratingLabel')}
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              size="large"
            />
          </div>
          <div className={styles.review}>
            <Typography component="p" gutterBottom="xlg">
              {t('reviewLabel')}
            </Typography>
            <Textarea className={styles.textarea} />
          </div>
          <Button>{t('button')}</Button>
        </div>
      </div>
    </Modal>
  );
};

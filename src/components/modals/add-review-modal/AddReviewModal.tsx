import Rating from '@mui/material/Rating';
import { useTranslations } from 'next-intl';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Textarea, Typography } from '@/ui-kit';
import { useCreateReview } from '@/services/review';
import { Modal } from '../modal';
import { ModalComponent } from '..';
import styles from './AddReviewModal.module.scss';

export interface AddReviewModalProps {
  serviceId: string;
  doctorId?: string;
  clinicId: string;
}

type Inputs = {
  rating: number | null;
  review: string;
};

export const AddReviewModal: ModalComponent<AddReviewModalProps> = ({
  handleClose,
  modalProps,
  open,
}) => {
  const t = useTranslations('AddReviewModal');
  const { createReview } = useCreateReview();
  const { serviceId, doctorId, clinicId } = modalProps || {};

  const { register, handleSubmit, setValue } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async values => {
    //TODO use real values
    await createReview({
      serviceId: '803cff65-8e38-4559-a3fb-d0c32ebc0844',
      clinicId: 'b939e10e-1e8c-4871-85d8-1f049c243852',
      text: values.review,
      rating: values.rating,
      ...(doctorId ? { doctorId } : {}),
    });
    handleClose();
  };

  return (
    <Modal handleClose={handleClose} open={open}>
      <div className={styles.addReviewModal}>
        <div className={styles.header}>
          <Typography component="h2" color="white">
            {t('title')}
          </Typography>
        </div>
        <form className={styles.content} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.ratingBlock}>
            <Typography component="p" gutterBottom="xlg">
              {t('ratingLabel')}
            </Typography>
            <Rating
              onChange={(_, newValue) => {
                setValue('rating', newValue);
              }}
              size="large"
            />
          </div>
          <div className={styles.review}>
            <Typography component="p" gutterBottom="xlg">
              {t('reviewLabel')}
            </Typography>
            <Textarea {...register('review')} className={styles.textarea} />
          </div>
          <Button type="submit">{t('button')}</Button>
        </form>
      </div>
    </Modal>
  );
};

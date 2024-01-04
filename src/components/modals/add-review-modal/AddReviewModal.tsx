import Rating from '@mui/material/Rating';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
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
  orderItemId: string;
  name?: string;
  title?: string;
  img?: string;
}

type Inputs = {
  rating: number | null;
  review: string;
};

export const AddReviewModal: ModalComponent<AddReviewModalProps> = ({
  handleClose,
  modalProps,
  open,
  openModal,
}) => {
  const t = useTranslations('AddReviewModal');
  const { createReview } = useCreateReview();
  const { serviceId, doctorId, clinicId, orderItemId, name, title, img } = modalProps || {};

  const { register, handleSubmit, setValue } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async values => {
    if (!serviceId || !clinicId || !orderItemId) return;

    await createReview({
      serviceId,
      clinicId,
      orderItemId,
      text: values.review,
      rating: values.rating,
      ...(doctorId ? { doctorId } : {}),
    });
    openModal('AlertModal', { message: 'Ваш відгук успішно створений' });
  };

  return (
    <Modal handleClose={handleClose} open={open}>
      <div className={styles.addReviewModal}>
        <div className={styles.header}>
          <Typography component="h2" color="white">
            {t('title')}
          </Typography>
        </div>
        <div className={styles.serviceInfo}>
          <div className={styles.serviceInfoWrapper}>
            <Image className={styles.image} src={img || ''} width={60} height={60} alt={'clinic'} />
            <div className={styles.info}>
              <Typography className={styles.title} component="h5">
                {title}
              </Typography>
              <Typography className={styles.name} component="p">
                {name}
              </Typography>
            </div>
          </div>
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

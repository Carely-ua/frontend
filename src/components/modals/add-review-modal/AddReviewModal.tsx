import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import classNames from 'classnames';
import { Button, Textarea, Typography } from '@/ui-kit';
import { useCreateReview } from '@/services/review';
import { CloseButton } from '@/components/close-button';
import { SVG } from '@/components/svg';
import { Modal } from '../modal';
import { ModalComponent } from '..';
import styles from './AddReviewModal.module.scss';

const ErrorMessage = () => (
  <div className={styles.alertWrapper}>
    <SVG.Alert className={styles.alertIcon} width={18} height={18} />
    <Typography component="p" className={styles.alert}>
      Поле обов&#39;язкове до заповнення
    </Typography>
  </div>
);

export interface AddReviewModalProps {
  serviceId: string;
  doctorId?: string;
  clinicId: string;
  orderItemId: string;
  name?: string;
  title?: string;
  img?: string;
  isConsultation?: boolean;
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
  const [error, setError] = useState(false);
  const [textErr, setTextErr] = useState(false);
  const t = useTranslations('AddReviewModal');
  const { createReview } = useCreateReview();
  const { serviceId, doctorId, clinicId, orderItemId, name, title, img, isConsultation } =
    modalProps || {};

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async values => {
    if (!serviceId || !clinicId || !orderItemId) return;

    await createReview({
      serviceId,
      clinicId,
      orderItemId,
      text: values.review,
      rating: Number(values.rating),
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
          <CloseButton handleClose={handleClose} />
        </div>
        <div className={styles.serviceInfo}>
          <div className={styles.serviceInfoWrapper}>
            <Image
              className={classNames(styles.image, { [styles.clinicImage]: !isConsultation })}
              src={img || ''}
              width={60}
              height={60}
              alt={'clinic'}
            />
            <div className={styles.info}>
              <Typography component="h5">{isConsultation ? name : title}</Typography>
              <Typography component="p" color="dark-grey">
                {isConsultation ? title : name}
              </Typography>
            </div>
          </div>
        </div>
        <form className={styles.content} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.ratingBlock}>
            <Typography component="p" gutterBottom="xlg">
              {t('ratingLabel')}
            </Typography>
            <Controller
              control={control}
              rules={{ required: true }}
              name={'rating'}
              render={({ field: { onChange, value } }) => (
                <Rating size="large" name={'rating'} onChange={onChange} value={Number(value)} />
              )}
            />
            {errors.rating && <ErrorMessage />}
          </div>
          <div className={styles.review}>
            <Typography component="p" gutterBottom="xlg">
              {t('reviewLabel')}
            </Typography>
            <Textarea
              onInput={e => {
                const text = e.target as HTMLInputElement;
                setTextErr(!text);
              }}
              {...register('review', { required: true })}
              className={classNames(styles.textarea, textErr && styles.textareaAlert)}
            />
            {errors.review && <ErrorMessage />}
          </div>
          <Button type="submit">{t('button')}</Button>
        </form>
      </div>
    </Modal>
  );
};

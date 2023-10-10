import Image from 'next/image';
import { Typography } from '@/ui-kit';
import { CloseButton } from '@/components/close-button';
import { ModalComponent } from '..';
import { Modal } from '../modal';
import styles from './SuccessAuthModal.module.scss';

export const SuccessAuthModal: ModalComponent = ({ handleClose, open }) => {
  return (
    <Modal handleClose={handleClose} open={open}>
      <div className={styles.modal}>
        <CloseButton handleClose={handleClose} />
        <Image
          className={styles.image}
          src="/images/woman.png"
          alt="woman"
          width="170"
          height="280"
        />
        <Typography className={styles.text} component="h2" color="white">
          Вітаємо ви успішно зайшли в систему
        </Typography>
      </div>
    </Modal>
  );
};

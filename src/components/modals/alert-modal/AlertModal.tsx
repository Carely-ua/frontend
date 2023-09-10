import { Typography } from '@/ui-kit';
import { CloseButton } from '@/components/close-button';
import { ModalComponent } from '..';
import { Modal } from '../modal';
import styles from './AlertModal.module.scss';

export interface AlertModalProps {
  message: string;
}

export const AlertModal: ModalComponent<AlertModalProps> = ({ handleClose, open, modalProps }) => {
  const { message } = modalProps || {};

  return (
    <Modal handleClose={handleClose} open={open}>
      <div className={styles.alertModal}>
        <CloseButton handleClose={handleClose} />
        <Typography component="h2" color="white" className={styles.message}>
          {message}
        </Typography>
      </div>
    </Modal>
  );
};

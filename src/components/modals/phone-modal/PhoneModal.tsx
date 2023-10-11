'use client';

import { Typography } from '@/ui-kit';
import { CloseButton } from '@/components/close-button';
import { ModalComponent } from '..';
import { Modal } from '../modal';
import styles from './PhoneModal.module.scss';

interface PhoneModalProps {
  phones: string[];
}

export const PhoneModal: ModalComponent<PhoneModalProps> = ({ modalProps, handleClose, open }) => {
  return (
    <Modal handleClose={handleClose} open={open}>
      <div className={styles.modal}>
        <CloseButton handleClose={handleClose} />
        <div>
          <Typography component="h2" gutterBottom="xlg" color="white">
            Зателефонувати:
          </Typography>
          {modalProps?.phones.map((phone, index) => (
            <Typography key={index} component="h3" gutterBottom="xlg" color="white">
              <a href={`tel:${phone}`}>{phone}</a>
            </Typography>
          ))}
        </div>
      </div>
    </Modal>
  );
};

import { Button, Typography } from '@/ui-kit';
import { ModalComponent } from '..';
import { Modal } from '../modal';
import styles from './ServiceWasNotAddedModal.module.scss';

export const ServiceWasNotAddedModal: ModalComponent = ({ openModal, handleClose, open }) => {
  const returnBackHandler = () => {
    openModal('AddToBagAuthModal');
  };

  return (
    <Modal handleClose={handleClose} open={open}>
      <div className={styles.modal}>
        <div className={styles.content}>
          <Typography component="h2" gutterBottom="xlg" color="white">
            Послуга не додана в кошик
          </Typography>
          <Typography component="h4" weight="medium" color="white">
            Для попереднього запису потрібен ваш номер телефону ви точно хочете вийти
          </Typography>
          <div className={styles.buttons}>
            <Button onClick={returnBackHandler} buttonType="secondary">
              Повернутись назад
            </Button>
            <Button onClick={handleClose} buttonType="white">
              Вийти
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

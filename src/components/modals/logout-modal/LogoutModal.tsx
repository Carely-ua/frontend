import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button, Typography } from '@/ui-kit';
import { ModalComponent } from '..';
import { Modal } from '../modal';
import styles from './LogoutModal.module.scss';

export const LogoutModal: ModalComponent = ({ handleClose, open }) => {
  const router = useRouter();

  const logoutHandler = async () => {
    await signOut({ redirect: false });
    handleClose();
    router.push('/');
  };

  return (
    <Modal handleClose={handleClose} open={open}>
      <div className={styles.modal}>
        <div className={styles.content}>
          <Typography component="h2" gutterBottom="xlg" color="white">
            Ви дійсно бажаєте вийти з системи
          </Typography>
          <div className={styles.buttons}>
            <Button onClick={handleClose} buttonType="secondary">
              Скасувати
            </Button>
            <Button onClick={logoutHandler} buttonType="white">
              Вийти
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
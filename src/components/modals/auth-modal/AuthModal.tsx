'use client';

import { AuthModalTemplate } from '../auth-modal-template';
import { ModalComponent } from '..';
import { Modal } from '../modal';

export const AuthModal: ModalComponent = ({ openModal, handleClose, open }) => {
  const successSignInHandler = () => {
    openModal('SuccessAuthModal');
  };

  return (
    <Modal handleClose={handleClose} open={open}>
      <AuthModalTemplate
        title="Вхід/реєстрація"
        description="Для реєстрації чи входу в акаунт, введіть свій номер телефона і підтвердження з SMS повідомлення."
        successSignInHandler={successSignInHandler}
      />
    </Modal>
  );
};

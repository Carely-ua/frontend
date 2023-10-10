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
        description="Lorem ipsum dolor sit amet consectetur. Tristique dictumst rhoncus enim "
        successSignInHandler={successSignInHandler}
      />
    </Modal>
  );
};

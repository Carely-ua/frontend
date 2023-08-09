import { AuthModalTemplate } from '../auth-modal-template';
import { Modal } from '../modal';
import { ModalComponent } from '..';

export const AddToBagAuthModal: ModalComponent = ({ openModal, handleClose, open }) => {
  const successSignInHandler = () => {
    openModal('SuccessAddedToCartModal');
  };

  const closeHandler = () => {
    handleClose();
    openModal('ServiceWasNotAddedModal');
  };

  return (
    <Modal handleClose={closeHandler} open={open}>
      <AuthModalTemplate
        title="Послуга успішно додана в кошик"
        description="Для деяких послуг потрібен попередній запис просимо вас ввести номер телефона"
        successSignInHandler={successSignInHandler}
      />
    </Modal>
  );
};

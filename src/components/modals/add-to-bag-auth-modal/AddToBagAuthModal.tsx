import { AuthModalTemplate } from '../auth-modal-template';
import { Modal } from '../modal';
import { ModalComponent } from '..';

export interface AddToBagAuthModalProps {
  addToBagHandler(): Promise<void>;
}

export const AddToBagAuthModal: ModalComponent<AddToBagAuthModalProps> = ({
  openModal,
  handleClose,
  open,
  modalProps,
}) => {
  const successSignInHandler = async () => {
    await modalProps?.addToBagHandler();
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

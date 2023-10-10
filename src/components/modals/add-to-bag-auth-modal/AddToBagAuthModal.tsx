import { AuthModalTemplate } from '../auth-modal-template';
import { Modal } from '../modal';
import { ModalComponent } from '..';

export interface AddToBagAuthModalProps {
  successSignInHandler(): Promise<void>;
}

export const AddToBagAuthModal: ModalComponent<AddToBagAuthModalProps> = ({
  handleClose,
  open,
  modalProps,
}) => {
  const successSignInHandler = async () => {
    await modalProps?.successSignInHandler();
    handleClose();
  };

  const closeHandler = () => {
    handleClose();
    // openModal('ServiceWasNotAddedModal');
  };

  return (
    <Modal handleClose={closeHandler} open={open}>
      <AuthModalTemplate
        title="Для створення замовлення, будь ласка, зайдіть в систему"
        description=""
        successSignInHandler={successSignInHandler}
      />
    </Modal>
  );
};

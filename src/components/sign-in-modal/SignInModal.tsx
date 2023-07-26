import { FC } from 'react';
import { ModalComponentProps } from '@/ui-kit';
import { ModalLayout } from '../modal-layout';

export const SingInModal: FC<ModalComponentProps> = ({ handleClose }) => {
  return (
    <ModalLayout handleClose={handleClose} title="Вхід/реєстрація">
      SingInModal
    </ModalLayout>
  );
};

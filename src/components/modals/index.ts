import { FC } from 'react';
import { AuthModal } from './auth-modal';
import { SuccessAuthModal } from './success-auth-modal';
import { LogoutModal } from './logout-modal';
import { AddReviewModal } from './add-review-modal';
import { AlertModal } from './alert-modal';
import { PhoneModal } from './phone-modal/PhoneModal';
import { AddToBagAuthModal } from './add-to-bag-auth-modal';

export const modals = {
  AddToBagAuthModal,
  AuthModal,
  SuccessAuthModal,
  LogoutModal,
  AddReviewModal,
  AlertModal,
  PhoneModal,
};

export type ModalId = keyof typeof modals;

export type ModalProps<T extends ModalId> = NonNullable<
  Parameters<(typeof modals)[T]>[0]['modalProps']
>;
interface ModalComponentProps<T extends {}> {
  openModal(modalId: ModalId, props?: ModalProps<typeof modalId>): void;
  handleClose(): void;
  open: boolean;
  modalProps: T | null;
}

export type ModalComponent<T extends {} = {}> = FC<ModalComponentProps<T>>;

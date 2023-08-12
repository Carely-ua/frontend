import { FC } from 'react';
import { AddToBagAuthModal } from './add-to-bag-auth-modal';
import { AuthModal } from './auth-modal';
import { SuccessAddedToCartModal } from './success-added-to-cart-modal';
import { SuccessAuthModal } from './success-auth-modal';
import { ServiceWasNotAddedModal } from './service-was-not-added-modal';
import { LogoutModal } from './logout-modal';

export const modals = {
  AddToBagAuthModal,
  AuthModal,
  SuccessAuthModal,
  SuccessAddedToCartModal,
  ServiceWasNotAddedModal,
  LogoutModal,
};

export type ModalId = keyof typeof modals;

export type ModalProps<T extends ModalId> = NonNullable<
  Parameters<(typeof modals)[T]>[0]['modalProps']
>;
interface ModalComponentProps<T extends {}> {
  openModal(modalId: ModalId, props?: T): void;
  handleClose(): void;
  open: boolean;
  modalProps: T | null;
}

export type ModalComponent<T extends {} = {}> = FC<ModalComponentProps<T>>;

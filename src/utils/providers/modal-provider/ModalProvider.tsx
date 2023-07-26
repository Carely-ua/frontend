'use client';

import { createContext, ReactNode, FC, useState, useCallback, useMemo, useEffect } from 'react';
import { Modal } from '@/ui-kit';
import { SingInModal } from '@/components';

const modals = {
  SingInModal: SingInModal,
};

type ModalId = keyof typeof modals;

interface ModalContextType {
  openModal: (id: ModalId) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({
  openModal: () => null,
  closeModal: () => null,
});

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [modalId, setModalId] = useState<ModalId | null>(null);

  const CurrentModal = !!modalId && modals[modalId];

  const openModal = useCallback((id: ModalId) => {
    setModalId(id);
  }, []);

  const closeModal = useCallback(() => {
    setModalId(null);
  }, []);

  const modalProviderValue = useMemo(
    () => ({
      openModal,
      closeModal,
    }),
    [openModal, closeModal],
  );

  return (
    <ModalContext.Provider value={modalProviderValue}>
      {children}
      <Modal handleClose={closeModal} open={!!modalId}>
        {!!CurrentModal && <CurrentModal handleClose={closeModal} />}
      </Modal>
    </ModalContext.Provider>
  );
};

'use client';

import { createContext, ReactNode, FC, useState, useCallback, useMemo, useContext } from 'react';
import { ModalId, modals } from '@/components/modals';

export interface ModalComponentProps {
  handleClose(): void;
  openModal(id: ModalId): void;
}

interface ModalContextType {
  openModal: (id: ModalId) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  openModal: () => null,
  closeModal: () => null,
});

export const useModalContext = () => useContext(ModalContext);

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
      {!!CurrentModal && (
        <CurrentModal handleClose={closeModal} openModal={openModal} open={!!modalId} />
      )}
    </ModalContext.Provider>
  );
};

import { FC, ReactNode } from 'react';
import { ModalProvider } from './modal-provider';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return <ModalProvider>{children}</ModalProvider>;
};

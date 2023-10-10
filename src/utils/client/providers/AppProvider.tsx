import { FC, ReactNode } from 'react';
import { ModalProvider } from './modal-provider';
import { AuthProvider, CustomAuthProvider } from './auth-provider';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <AuthProvider>
      <ModalProvider>
        <CustomAuthProvider>{children}</CustomAuthProvider>
      </ModalProvider>
    </AuthProvider>
  );
};

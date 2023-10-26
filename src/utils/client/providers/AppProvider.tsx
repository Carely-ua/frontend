import { FC, ReactNode } from 'react';
import { ModalProvider } from './modal-provider';
import { AuthProvider, CustomAuthProvider } from './auth-provider';
import { SnackbarProvider } from './snackbar-provider';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <AuthProvider>
      <SnackbarProvider>
        <ModalProvider>
          <CustomAuthProvider>{children}</CustomAuthProvider>
        </ModalProvider>
      </SnackbarProvider>
    </AuthProvider>
  );
};

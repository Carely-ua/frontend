'use client';

import { ReactNode, FC } from 'react';
import { SnackbarProvider as NotistackProvider } from 'notistack';
import { Snackbar } from '@/components/snackbar';

interface SnackbarProviderProps {
  children: ReactNode;
}

declare module 'notistack' {
  interface VariantOverrides {
    snackbar: true;
  }
}

export const SnackbarProvider: FC<SnackbarProviderProps> = ({ children }) => {
  return (
    <NotistackProvider
      Components={{
        snackbar: Snackbar,
      }}>
      {children}
    </NotistackProvider>
  );
};

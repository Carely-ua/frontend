'use client';

import { ReactNode, FC } from 'react';
import { useModalContext } from '@/utils/client';

interface LogoutButtonProps {
  children: ReactNode;
}

export const LogoutButton: FC<LogoutButtonProps> = ({ children }) => {
  const { openModal } = useModalContext();

  const logoutHandler = async () => {
    openModal('LogoutModal');
  };

  return <div onClick={logoutHandler}>{children}</div>;
};

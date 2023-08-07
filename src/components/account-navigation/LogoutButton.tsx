'use client';

import { ReactNode, FC } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface LogoutButtonProps {
  children: ReactNode;
}

export const LogoutButton: FC<LogoutButtonProps> = ({ children }) => {
  const router = useRouter();

  const logoutHandler = async () => {
    await signOut({ redirect: false });
    router.push('/');
  };

  return <div onClick={logoutHandler}>{children}</div>;
};

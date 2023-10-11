'use client';

import { FC, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface GeneralClinicCartContainerProps {
  path: string;
  children: ReactNode;
}

export const GeneralClinicCartContainer: FC<GeneralClinicCartContainerProps> = ({
  children,
  path,
}) => {
  const router = useRouter();

  const clickHandler = () => {
    router.push(path);
  };

  return <div onClick={clickHandler}>{children}</div>;
};

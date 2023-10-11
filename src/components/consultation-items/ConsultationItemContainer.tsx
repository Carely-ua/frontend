'use client';

import { ReactNode, FC, SyntheticEvent } from 'react';

interface ConsultationItemContainerProps {
  children: ReactNode;
}

export const ConsultationItemContainer: FC<ConsultationItemContainerProps> = ({ children }) => {
  const clickHandler = (e: SyntheticEvent<any>) => {
    e.stopPropagation();
  };

  return <div onClick={clickHandler}>{children}</div>;
};

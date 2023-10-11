'use client';

import { FC, SyntheticEvent } from 'react';
import { useModalContext } from '@/utils/client';
import { SVG } from '../svg';
import styles from './PhoneButton.module.scss';

interface PhoneButtonProps {
  phones: string[];
}

export const PhoneButton: FC<PhoneButtonProps> = ({ phones }) => {
  const { openModal } = useModalContext();

  const pressHandler = (e: SyntheticEvent<any>) => {
    e.stopPropagation();
    openModal('PhoneModal', { phones });
  };

  return (
    <div className={styles.phoneButton} onClick={pressHandler}>
      <SVG.Phone width={24} height={24} />
    </div>
  );
};

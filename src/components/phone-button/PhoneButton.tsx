'use client';

import { FC } from 'react';
import { useModalContext } from '@/utils/client';
import { SVG } from '../svg';
import styles from './PhoneButton.module.scss';

interface PhoneButtonProps {
  phones: string[];
}

export const PhoneButton: FC<PhoneButtonProps> = ({ phones }) => {
  const { openModal } = useModalContext();

  const pressHandler = () => {
    openModal('PhoneModal', { phones });
  };

  return (
    <div className={styles.phoneButton} onClick={pressHandler}>
      <SVG.Phone width={24} height={24} />
    </div>
  );
};

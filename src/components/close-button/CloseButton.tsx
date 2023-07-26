import Image from 'next/image';
import { FC } from 'react';
import styles from './CloseButton.module.scss';

interface CloseButtonProps {
  handleClose(): void;
}

export const CloseButton: FC<CloseButtonProps> = ({ handleClose }) => {
  return (
    <button onClick={handleClose} className={styles.closeButton}>
      <Image src="/icons/close.svg" alt="close" width="32" height="32" />
    </button>
  );
};

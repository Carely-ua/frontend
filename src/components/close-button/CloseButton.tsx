import { FC } from 'react';
import { SVG } from '../svg';
import styles from './CloseButton.module.scss';

interface CloseButtonProps {
  handleClose(): void;
}

export const CloseButton: FC<CloseButtonProps> = ({ handleClose }) => {
  return (
    <button onClick={handleClose} className={styles.closeButton}>
      <SVG.Close width="32" height="32" />
    </button>
  );
};

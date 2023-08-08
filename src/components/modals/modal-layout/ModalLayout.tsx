import { FC, ReactNode } from 'react';
import { ModalComponentProps, Typography } from '@/ui-kit';
import { CloseButton } from '../../close-button';
import styles from './ModalLayout.module.scss';

interface ModalLayoutProps extends ModalComponentProps {
  children: ReactNode;
  title: string;
}

export const ModalLayout: FC<ModalLayoutProps> = ({ children, title, handleClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <Typography component="h2" color="white">
          {title}
        </Typography>
        <CloseButton handleClose={handleClose} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

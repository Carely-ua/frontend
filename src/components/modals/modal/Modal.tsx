import ModalMUI from '@mui/base/Modal';
import { FC, ReactNode, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Modal.module.scss';

interface ModalProps {
  children: ReactNode;
  open: boolean;
  handleClose(): void;
}

const Backdrop = forwardRef<HTMLDivElement, { open?: boolean; className: string }>(
  function Backdrop(props, ref) {
    const { open, className, ...other } = props;
    return <div className={classNames(className, styles.backdrop)} ref={ref} {...other} />;
  },
);

export const Modal: FC<ModalProps> = ({ children, open, handleClose }) => {
  return (
    <ModalMUI
      open={open}
      onClose={handleClose}
      className={styles.modal}
      slots={{ backdrop: Backdrop }}
      closeAfterTransition>
      <div>{children}</div>
    </ModalMUI>
  );
};

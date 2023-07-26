'use client';

import { useContext } from 'react';
import Image from 'next/image';
import { Typography } from '@/ui-kit';
import { ModalContext } from '@/utils/providers/modal-provider/ModalProvider';
import styles from './ProfileButton.module.scss';

export const ProfileButton = () => {
  const { openModal } = useContext(ModalContext);

  const clickHandler = () => {
    openModal('SingInModal');
  };

  return (
    <div onClick={clickHandler} className={styles.wrapper}>
      <Typography component="p" color="dark-grey">
        Profile
      </Typography>
      <div className={styles.icon}>
        <Image src="/icons/user.svg" alt="cart" width="18" height="18" />
      </div>
    </div>
  );
};

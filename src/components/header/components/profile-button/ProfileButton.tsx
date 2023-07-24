'use client';

import Image from 'next/image';
import { Typography } from '@/ui-kit';
import styles from './ProfileButton.module.scss';

export const ProfileButton = () => {
  const clickHandler = () => {
    console.log('clickHandler');
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
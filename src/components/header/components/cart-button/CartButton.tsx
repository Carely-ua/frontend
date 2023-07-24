'use client';

import Image from 'next/image';
import { Typography } from '@/ui-kit';
import styles from './CartButton.module.scss';

export const CartButton = () => {
  const clickHandler = () => {
    console.log('onClick');
  };

  return (
    <div onClick={clickHandler} className={styles.container}>
      <div className={styles.cartButton}>
        <Image src="/icons/cart.svg" alt="cart" width="24" height="24" />
      </div>
      <div className={styles.count}>
        <Typography component="span" color="white">
          2
        </Typography>
      </div>
    </div>
  );
};

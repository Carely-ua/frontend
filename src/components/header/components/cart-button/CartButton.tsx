'use client';

import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Typography } from '@/ui-kit';
import styles from './CartButton.module.scss';

export const CartButton = () => {
  const { data: session } = useSession();

  const clickHandler = async () => {
    const res = await signIn('credentials', { phone: '380637362980', code: '4324' });
  };

  const logoutHandler = async () => {
    const res = await signOut();
  };

  return (
    <>
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
      <button onClick={logoutHandler}>log out</button>
    </>
  );
};

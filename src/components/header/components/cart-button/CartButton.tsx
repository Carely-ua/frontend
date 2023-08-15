'use client';

import Link from 'next/link';
import { Typography } from '@/ui-kit';
import { SVG } from '@/components/svg';
import { useGetCart } from '@/services/cart/get-cart';
import styles from './CartButton.module.scss';

export const CartButton = () => {
  const { data } = useGetCart();

  const count = data?.cart?.cartLength;

  return (
    <Link href="/cart" className={styles.container}>
      <div className={styles.cartButton}>
        <SVG.Cart width="24" height="24" />
      </div>
      {!!count && (
        <div className={styles.count}>
          <Typography component="span" color="white">
            {count}
          </Typography>
        </div>
      )}
    </Link>
  );
};

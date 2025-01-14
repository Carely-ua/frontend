'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { Typography } from '@/ui-kit';
import { SVG } from '@/components/svg';
import { useGetCart } from '@/services/cart/get-cart';
import { useModalContext } from '@/utils/client';
import styles from './CartButton.module.scss';

interface CartButtonProps {
  clickHandler?(): void;
}

export const CartButton: FC<CartButtonProps> = ({ clickHandler: _clickHandler }) => {
  const { data } = useGetCart();
  const router = useRouter();
  const { openModal } = useModalContext();

  const count = data?.cartLength;

  const clickHandler = () => {
    _clickHandler?.();
    if (!count || count === 0) {
      openModal('AlertModal', { message: 'Кошик наразі порожній' });
    } else {
      router.push('/cart');
    }
  };

  return (
    <div onClick={clickHandler} className={styles.container}>
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
    </div>
  );
};

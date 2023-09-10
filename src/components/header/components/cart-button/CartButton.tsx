'use client';

import { useRouter } from 'next/navigation';
import { Typography } from '@/ui-kit';
import { SVG } from '@/components/svg';
import { useGetCart } from '@/services/cart/get-cart';
import { useModalContext } from '@/utils/client';
import styles from './CartButton.module.scss';

export const CartButton = () => {
  const { data } = useGetCart();
  const router = useRouter();
  const { openModal } = useModalContext();

  const count = data?.cart?.cartLength;

  const clickHandler = () => {
    if (!count || count === 0) {
      openModal('AlertModal', { message: 'Кошик на разі порожній' });
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

import Link from 'next/link';
import { Typography } from '@/ui-kit';
import { SVG } from '@/components/svg';
import styles from './CartButton.module.scss';

export const CartButton = () => {
  return (
    <Link href="/cart" className={styles.container}>
      <div className={styles.cartButton}>
        <SVG.Cart width="24" height="24" />
      </div>
      <div className={styles.count}>
        <Typography component="span" color="white">
          2
        </Typography>
      </div>
    </Link>
  );
};

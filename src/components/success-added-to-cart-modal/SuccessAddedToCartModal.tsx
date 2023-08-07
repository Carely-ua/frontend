import Image from 'next/image';
import Link from 'next/link';
import { Typography, Button } from '@/ui-kit';
import styles from './SuccessAddedToCartModal.module.scss';

export const SuccessAddedToCartModal = () => {
  return (
    <div className={styles.modal}>
      <Image
        className={styles.image}
        src="/images/woman.png"
        alt="woman"
        width="170"
        height="280"
      />
      <div className={styles.content}>
        <Typography component="h2" color="white" gutterBottom="xlg">
          Протягом 3-5 хвилин з вами зв&apos;яжеться менеджер для запису
        </Typography>
        <Typography component="h4" color="white">
          Далі ви можете оплатии послугу
        </Typography>
        <Link href="/cart" className={styles.link}>
          <Button buttonType="white">Перейти в корзину для оплати</Button>
        </Link>
      </div>
    </div>
  );
};

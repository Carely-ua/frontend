import Image from 'next/image';
import { Typography } from '@/ui-kit';
import styles from './SuccessAuthModal.module.scss';

export const SuccessAuthModal = () => {
  return (
    <div className={styles.modal}>
      <Image
        className={styles.image}
        src="/images/woman.png"
        alt="woman"
        width="170"
        height="280"
      />
      <Typography className={styles.text} component="h2" color="white">
        Вітаємо ви успішно зайшли в систему
      </Typography>
    </div>
  );
};

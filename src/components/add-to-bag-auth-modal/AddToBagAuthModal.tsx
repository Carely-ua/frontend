import { useTranslations } from 'next-intl';
import Image from 'next/image';
import classNames from 'classnames';
import { Typography } from '@/ui-kit';
import { AuthForm } from '../auth-form';
import styles from './AddToBagAuthModal.module.scss';

export const AddToBagAuthModal = () => {
  // const t = useTranslations('AddToBagAuthModal');

  return (
    <div className={styles.modal}>
      <div className={classNames(styles.section, styles.contentSection)}>
        <Typography component="h2" color="white" gutterBottom="md">
          Послуга успішно додана в кошик
        </Typography>
        <Typography component="h4" color="white" weight="medium" className={styles.description}>
          Для деяких послуг потрібен попередній запис просимо вас ввести номер телефона
        </Typography>
        <Image
          className={styles.image}
          src="/images/woman.png"
          alt="woman"
          width="170"
          height="280"
        />
      </div>
      <div className={styles.section}>
        <AuthForm />
      </div>
    </div>
  );
};

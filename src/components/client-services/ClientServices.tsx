import Image from 'next/image';
import classNames from 'classnames';
import { Typography } from '@/ui-kit';
import styles from './ClientServices.module.scss';

const mockItems = [
  {
    id: 1,
    clinicName: 'Медична лабораторія «МедЛаб»',
    serviceName: 'Йод (сеча)',
    description: 'Доступно в будь-якому відділенні',
    image: '/images/test-clinic-image.png',
    firstPrice: 120,
    secondPrice: 100,
    isActive: true,
  },
  {
    id: 2,
    clinicName: 'Медична лабораторія «МедЛаб»',
    serviceName: 'Йод (сеча)',
    description: 'Доступно в будь-якому відділенні',
    image: '/images/test-clinic-image.png',
    firstPrice: 120,
    secondPrice: 100,
    isActive: false,
  },
  {
    id: 3,
    clinicName: 'Медична лабораторія «МедЛаб»',
    serviceName: 'Йод (сеча)',
    description: 'Доступно в будь-якому відділенні',
    image: '/images/test-clinic-image.png',
    firstPrice: 120,
    secondPrice: 100,
    isActive: true,
  },
];

export const ClientServices = () => {
  return (
    <div className={styles.table}>
      <div className={classNames(styles.row, styles.head)}>
        <Typography component="p" color="secondary">
          Заклад
        </Typography>
        <Typography component="p" color="secondary">
          Вид аналізу
        </Typography>
        <Typography component="p" color="secondary">
          Ціна
        </Typography>
        <Typography component="p" color="secondary">
          Статус
        </Typography>
      </div>
      {mockItems.map(
        ({ id, clinicName, serviceName, description, firstPrice, secondPrice, isActive }) => (
          <div key={id} className={classNames(styles.row, styles.item)}>
            <div className={styles.clinicInfo}>
              <div className={styles.image}>
                <Image src="/images/test-clinic-image.png" alt="clinic" width={48} height={48} />
              </div>
              <div>
                <Typography component="h4">{clinicName}</Typography>
                <Typography component="p" color="dark-grey">
                  {description}
                </Typography>
              </div>
            </div>
            <Typography component="p">{serviceName}</Typography>
            <div className={styles.price}>
              <Typography className={styles.firstPrice} component="h4" color="dark-grey">
                {firstPrice}
              </Typography>
              <Typography component="h4" color="secondary">
                {secondPrice} грн
              </Typography>
            </div>
            <div className={styles.status}>
              {isActive ? (
                <Typography
                  className={classNames(styles.statusItem, styles.statusActive)}
                  component="p"
                  color="white">
                  Активний
                </Typography>
              ) : (
                <Typography className={styles.statusItem} component="p" color="white">
                  Виконано
                </Typography>
              )}
              {!isActive && (
                <Typography className={styles.feedbackButton} component="p" color="primary">
                  Залишити відгук
                </Typography>
              )}
            </div>
          </div>
        ),
      )}
    </div>
  );
};

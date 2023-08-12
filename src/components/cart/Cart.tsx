import classNames from 'classnames';
import Image from 'next/image';
import { Typography } from '@/ui-kit';
import { getCart } from '@/services';
import { PriceBlock } from '../price-block';
import { SVG } from '../svg';
import styles from './Cart.module.scss';

const defaultImage = '/images/test-clinic-image.png';

const mockItems = [
  {
    id: 1,
    image: defaultImage,
    clinicName: 'Медична лабораторія «МедЛаб» 1',
    serviceType: 'Аналіз',
    serviceName: 'Пероксидаза щитоподібної залози, антитіла (ATПO)',
    firstPrice: 120,
    secondPrice: 100,
  },
  {
    id: 2,
    image: defaultImage,
    clinicName: 'Медична лабораторія «МедЛаб» 2',
    serviceType: 'Аналіз',
    serviceName: 'Пероксидаза щитоподібної залози, антитіла (ATПO)',
    firstPrice: 120,
    secondPrice: 100,
  },
  {
    id: 3,
    image: defaultImage,
    clinicName: 'Медична лабораторія «МедЛаб» 3',
    serviceType: 'Аналіз',
    serviceName: 'Пероксидаза щитоподібної залози, антитіла (ATПO)',
    firstPrice: 120,
    secondPrice: 100,
  },
];

export const Cart = async () => {
  const { data } = await getCart();

  return (
    <div>
      <div className={styles.table}>
        <div className={classNames(styles.row, styles.head)}>
          <Typography component="p" color="secondary">
            Заклад
          </Typography>
          <Typography component="p" color="secondary">
            Вид послуги
          </Typography>
          <Typography component="p" color="secondary">
            Назва послуги
          </Typography>
          <Typography component="p" color="secondary">
            Ціна
          </Typography>
          <div />
        </div>
        {mockItems.map(
          ({ id, clinicName, serviceName, image, serviceType, firstPrice, secondPrice }) => (
            <div key={id} className={classNames(styles.row, styles.item)}>
              <div className={styles.clinicInfo}>
                <div className={styles.image}>
                  <Image src={image} alt="clinic" width={48} height={48} />
                </div>
                <Typography component="h4">{clinicName}</Typography>
              </div>
              <div>
                <Typography component="p">{serviceType}</Typography>
              </div>
              <Typography component="p">{serviceName}</Typography>
              <PriceBlock flexStart firstPrice={firstPrice} secondPrice={secondPrice} />
              <div>
                <button className={styles.deleteButton}>
                  <SVG.Cross width={24} height={24} />
                </button>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { Typography } from '@/ui-kit';
import { CartTypes, getCart } from '@/services';
import { PriceBlock } from '../price-block';
import { SVG } from '../svg';
import styles from './Cart.module.scss';

const defaultImage = '/images/test-clinic-image.png';

const CartItem: FC<CartTypes.CartItem> = ({ service }) => {
  if (!service) return null;

  const { name, serviceType, price, clinic } = service;

  return (
    <div className={classNames(styles.row, styles.item)}>
      <div className={styles.clinicInfo}>
        <div className={styles.image}>
          <Image src={clinic?.image || defaultImage} alt="clinic" width={48} height={48} />
        </div>
        <Typography component="h4">{clinic?.name}</Typography>
      </div>
      <div>
        <Typography component="p">{serviceType}</Typography>
      </div>
      <Typography component="p">{name}</Typography>
      <PriceBlock flexStart firstPrice={120} secondPrice={price} />
      <div>
        <button className={styles.deleteButton}>
          <SVG.Cross width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export const Cart = async () => {
  const { data } = await getCart();

  if (!data.cart) return null;

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
        {data.cart.map(item => {
          if (!item) return null;

          return <CartItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

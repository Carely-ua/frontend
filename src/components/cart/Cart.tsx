'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { Typography } from '@/ui-kit';
import { CartTypes } from '@/services';
import { useDestroyCartItem } from '@/services/cart/destroy-cart-item';
import { useGetCart } from '@/services/cart/get-cart';
import { PriceBlock } from '../price-block';
import { SVG } from '../svg';
import styles from './Cart.module.scss';

const defaultImage = '/images/test-clinic-image.png';

const CartItem: FC<CartTypes.CartItem> = ({ service }) => {
  const { destroyCartItem } = useDestroyCartItem();

  const deleteCartItem = async () => {
    if (!service?.id) return;

    return await destroyCartItem(service.id);
  };

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
        <button onClick={deleteCartItem} className={styles.deleteButton}>
          <SVG.Cross width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export const Cart = () => {
  const { data } = useGetCart();
  console.log('data', data);

  if (!data?.cart) return null;

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

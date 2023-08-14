'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { Button, Typography } from '@/ui-kit';
import { CartTypes } from '@/services';
import { useDestroyCartItem } from '@/services/cart/destroy-cart-item';
import { useGetCart } from '@/services/cart/get-cart';
import { PriceBlock } from '../price-block';
import { SVG } from '../svg';
import styles from './Cart.module.scss';

const defaultImage = '/images/test-clinic-image.png';

const CartItem: FC<CartTypes.CartItem> = ({ id, service }) => {
  const { destroyCartItem } = useDestroyCartItem();

  const deleteCartItem = async () => {
    return await destroyCartItem(id);
  };

  if (!service) return null;

  const { name, serviceType, price, discountPrice, clinic } = service;

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
      <PriceBlock flexStart firstPrice={price} secondPrice={discountPrice} />
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

  if (!data?.cart) return null;

  const { cartSum, cartDiscountSum, cartItems } = data.cart;

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
        {cartItems?.map(item => {
          if (!item) return null;

          return <CartItem key={item.id} {...item} />;
        })}
        <div className={styles.cartInfo}>
          <div className={styles.cartInfoItem}>
            <Typography component="p">Ціна в клініці</Typography>
            <Typography component="h4" weight="medium">
              {cartSum} грн
            </Typography>
          </div>
          <div className={styles.cartInfoItem}>
            <Typography component="p">Ціна Carely</Typography>
            <Typography component="h4" weight="medium" color="secondary">
              {cartDiscountSum} грн
            </Typography>
          </div>
          <div className={styles.cartInfoItem}>
            <Typography component="p">Всього до сплати</Typography>
            <Typography component="h4" weight="medium" color="secondary">
              {cartDiscountSum} грн
            </Typography>
          </div>
          <div className={styles.cartInfoItem}>
            <Button>Сплатити</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

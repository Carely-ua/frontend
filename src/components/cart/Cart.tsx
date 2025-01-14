'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { FC, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Button, Typography } from '@/ui-kit';
import { CartTypes } from '@/services';
import { useDestroyCartItem } from '@/services/cart/destroy-cart-item';
import { useGetCart } from '@/services/cart/get-cart';
import { useCreateOrder } from '@/services/cart/create-order';
import { ServiceType } from '@/utils/graphql/__generated__/types';
import { useModalContext } from '@/utils/client';
import { PriceBlock } from '../price-block';
import { SVG } from '../svg';
import { Breadcrumbs } from '../breadcrumbs';
import styles from './Cart.module.scss';

const titles = {
  [ServiceType.Analyse]: 'Аналізи',
  [ServiceType.Consultations]: 'Консультації',
  [ServiceType.Diagnostic]: 'Діагностика',
};

const icons = {
  [ServiceType.Analyse]: SVG.Analyze,
  [ServiceType.Consultations]: SVG.Doctor,
  [ServiceType.Diagnostic]: SVG.Diagnostic,
};

const CLINIC_TYPES = {
  clinic: 'clinics',
  laboratory: 'labs',
};

const CartItem: FC<CartTypes.CartItem> = ({ id, service, doctor }) => {
  const { destroyCartItem } = useDestroyCartItem();

  const deleteCartItem = async () => {
    return await destroyCartItem(id);
  };

  if (!service) return null;

  const { name, serviceType, price, discountPrice, clinic } = service;

  const isConsultation = serviceType === ServiceType.Consultations;
  const image = isConsultation ? doctor?.image : clinic?.mainImage;
  const Icon = icons[serviceType];
  const clinicType = clinic?.clinicType || 'clinic';
  const clinicPath = `/${CLINIC_TYPES[clinicType]}/${clinic?.id}`;
  const doctorPath = `/doctor/${doctor?.id}`;
  const pathForImageLink = isConsultation ? doctorPath : clinicPath;

  return (
    <div className={classNames(styles.row, styles.item)}>
      <div className={styles.clinicInfo}>
        <div className={styles.image}>
          <Link href={pathForImageLink}>
            {!!image && <Image src={image} alt="clinic" width={60} height={60} />}
          </Link>
        </div>
        <div>
          <Link href={clinicPath} className={styles.link}>
            <Typography component="h4">{clinic?.name}</Typography>
          </Link>
          {isConsultation && (
            <Link href={doctorPath} className={styles.link}>
              <Typography component="p" color="dark-grey">
                {doctor?.name}
              </Typography>
            </Link>
          )}
        </div>
      </div>
      <div className={styles.serviceType}>
        <div className={styles.serviceTypeIcon}>
          <Icon width={16} height={16} />
        </div>
        <Typography component="p">{titles[serviceType]}</Typography>
      </div>
      <Typography component="p">{name}</Typography>
      <div className={styles.priceBlock}>
        <PriceBlock
          flexStart
          firstPrice={doctor?.price ?? price}
          secondPrice={doctor?.discountPrice ?? discountPrice}
        />
      </div>
      <div className={styles.deleteButtonContainer}>
        <button onClick={deleteCartItem} className={styles.deleteButton}>
          <SVG.Cross width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export const Cart = () => {
  const { data } = useGetCart();
  const { createOrder } = useCreateOrder();
  const { data: session } = useSession();
  const { openModal } = useModalContext();
  const router = useRouter();

  const orderSuccessfullyCreated = useCallback(() => {
    openModal('AlertModal', { message: `Замовлення успішно створенно` });
  }, [openModal]);

  const createOrderHandler = async () => {
    if (!session?.user.token) {
      openModal('AddToBagAuthModal', { successSignInHandler: orderSuccessfullyCreated });
      return;
    }

    const { data } = await createOrder();
    router.push('/account/orders');
    orderSuccessfullyCreated();
  };

  if (!data) return null;

  const { cartItems } = data;

  return (
    <div>
      <Breadcrumbs breadcrumbs={[{ label: 'Корзина', path: '/' }]} />
      {cartItems?.length === 0 ? (
        <Typography component="h3">Кошик наразі порожній</Typography>
      ) : (
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
              <Button onClick={createOrderHandler}>Оформити бронювання</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import Image from 'next/image';
import classNames from 'classnames';
import { FC } from 'react';
import { Button, Typography } from '@/ui-kit';
import { SVG } from '../svg';
import styles from './Orders.module.scss';

const ORDERS_DATA = [
  { id: 1, items: [{ id: 11 }, { id: 12 }] },
  { id: 2, items: [{ id: 21 }, { id: 22 }] },
];

const OrderItem = () => {
  return (
    <div className={styles.voucher}>
      <div className={classNames(styles.block, styles.blockCenter)}>
        <div className={styles.serviceType}>
          <SVG.Analyze />
          <Typography component="p" color="primary">
            Аналізи
          </Typography>
        </div>
      </div>
      <div className={classNames(styles.block, styles.mainSection)}>
        <div>
          <div className={styles.mainInfo}>
            <div className={styles.image}>
              <Image
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/medical-clinic-logo-healthcare-logo-design-template-030829d4eea09e04efaa539c5766a00d_screen.jpg?ts=1666032713"
                width={46}
                height={46}
                alt={'clinic'}
              />
            </div>
            <div>
              <Typography component="h5">Медична лабораторія «МедЛаб»</Typography>
              <Typography component="p" color="dark-grey">
                Доступно в будь-якому відділенні
              </Typography>
            </div>
          </div>
          <div>
            <Typography component="p">Пероксидаза щитоподібної залози, антитіла (ATПO)</Typography>
          </div>
        </div>
      </div>
      <div className={classNames(styles.block, styles.blockCenter)}>
        <div>
          <Typography component="p" color="secondary">
            № ваучера
          </Typography>
          <Typography component="h5" weight="medium">
            612641
          </Typography>
        </div>
      </div>
      <div className={classNames(styles.block, styles.blockCenter)}>
        <div>
          <Typography component="p" color="secondary">
            Дата створенняя
          </Typography>
          <Typography component="h5" weight="medium">
            20.03.23
          </Typography>
        </div>
      </div>
      <div className={classNames(styles.block, styles.blockCenter)}>
        <div>
          <Typography component="p" color="secondary">
            Термін дії
          </Typography>
          <Typography component="h5" weight="medium">
            20.08.23
          </Typography>
        </div>
      </div>
      <div className={styles.block}>
        <Button buttonType="secondary">Активувати знову</Button>
      </div>
    </div>
  );
};

interface OrderProps {
  id: number;
  items: Array<any>;
}

const Order: FC<OrderProps> = ({ id, items }) => {
  return (
    <div className={styles.order}>
      <Typography component="h3" key={id}>
        Замовлення №{id}
      </Typography>
      {items.map(item => (
        <OrderItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export const Orders = () => {
  return (
    <div>
      {ORDERS_DATA.map(order => (
        <Order key={order.id} {...order} />
      ))}
    </div>
  );
};

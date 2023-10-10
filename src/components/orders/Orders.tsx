import Image from 'next/image';
import classNames from 'classnames';
import { FC } from 'react';
import { Button, Typography } from '@/ui-kit';
import { CartTypes } from '@/services';
import { formatDate } from '@/utils';
import { ServiceType, ClinicType } from '@/utils/graphql/__generated__/types';
import { SVG } from '../svg';
import styles from './Orders.module.scss';

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

const OrderItem: FC<CartTypes.OrderItem> = ({ service, endDate, createdAt, number, doctor }) => {
  const isConsultation = service?.serviceType === ServiceType.Consultations;
  const isLab = service?.clinic?.clinicType === ClinicType.Laboratory;

  const image = isConsultation ? doctor?.image : service?.clinic?.mainImage;
  const Icon = service?.serviceType && icons[service?.serviceType];
  const serviceType = service?.serviceType && titles[service?.serviceType];

  const mainSectionTitle = isConsultation ? doctor?.name : service?.clinic?.name;
  const mainSectionSubTitle = isConsultation
    ? doctor?.tags?.join(', ')
    : isLab
    ? 'Доступно в будь-якому відділенні'
    : '';
  const mainSectionText = isConsultation ? service.clinic?.name : service?.name;

  return (
    <div className={styles.voucher}>
      <div className={classNames(styles.block, styles.blockCenter, styles.serviceTypeContainer)}>
        <div className={styles.serviceType}>
          {!!Icon && <Icon width={17} height={17} />}
          <Typography component="p" color="primary">
            {serviceType}
          </Typography>
        </div>
      </div>
      <div className={classNames(styles.block, styles.mainSection)}>
        <div>
          <div className={styles.mainInfo}>
            <div className={styles.image}>
              <Image src={image || ''} width={46} height={46} alt={'clinic'} />
            </div>
            <div>
              <Typography component="h5">{mainSectionTitle}</Typography>
              <Typography component="p" color="dark-grey">
                {mainSectionSubTitle}
              </Typography>
            </div>
          </div>
          <div>
            <Typography component="p">{mainSectionText}</Typography>
          </div>
        </div>
      </div>
      <div className={classNames(styles.block, styles.blockCenter)}>
        <div>
          <Typography component="p" color="secondary" gutterBottom="sm">
            № ваучера
          </Typography>
          <Typography component="h5" weight="medium">
            {number}
          </Typography>
        </div>
      </div>
      <div className={classNames(styles.block, styles.blockCenter)}>
        <div>
          <Typography component="p" color="secondary" gutterBottom="sm">
            Дата створенняя
          </Typography>
          <Typography component="h5" weight="medium">
            {formatDate(createdAt)}
          </Typography>
        </div>
      </div>
      <div className={classNames(styles.block, styles.blockCenter)}>
        <div>
          <Typography component="p" color="secondary" gutterBottom="sm">
            Термін дії
          </Typography>
          <Typography component="h5" weight="medium">
            {formatDate(endDate)}
          </Typography>
        </div>
      </div>
      <div className={classNames(styles.block, styles.statusBlock)}>
        <div>
          <div>
            <span />
            <Typography component="p">Активний</Typography>
          </div>
          <Button buttonType="secondary">Активувати знову</Button>
        </div>
      </div>
    </div>
  );
};

const Order: FC<CartTypes.Order> = ({ id, orderItems }) => {
  return (
    <div className={styles.order}>
      <Typography component="h3" key={id}>
        Замовлення №{id}
      </Typography>
      {orderItems.map(item => {
        if (!item) return null;

        return <OrderItem key={item.id} {...item} />;
      })}
    </div>
  );
};

interface OrdersProps {
  orders: CartTypes.Orders;
}

export const Orders: FC<OrdersProps> = ({ orders }) => {
  return (
    <div>
      {orders.map(order => {
        if (!order) return null;

        return <Order key={order.id} {...order} />;
      })}
    </div>
  );
};

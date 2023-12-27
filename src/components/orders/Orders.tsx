import Image from 'next/image';
import classNames from 'classnames';
import { FC } from 'react';
import { Button, Typography } from '@/ui-kit';
import { CartTypes } from '@/services';
import { formatDate } from '@/utils';
import { ServiceType, ClinicType, OrderStatus } from '@/utils/graphql/__generated__/types';
import { SVG } from '../svg';
import styles from './Orders.module.scss';
import { OrderButton } from './OrderButton';

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

const statusData = {
  [OrderStatus.Active]: {
    title: 'Активний',
    buttonText: 'Записатися',
    styles: styles.statusActive,
  },
  [OrderStatus.Done]: {
    title: 'Виконано',
    buttonText: 'Залишити відгук',
    styles: styles.statusDone,
  },
  [OrderStatus.UnActive]: {
    title: 'Неактивний',
    buttonText: 'Активувати знову',
    styles: styles.statusUnActive,
  },
};

const OrderItem: FC<CartTypes.OrderItem> = ({
  service,
  endDate,
  createdAt,
  number,
  doctor,
  status,
}) => {
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

  const serviceInfo = (
    <div className={styles.mainSectionItem}>
      <Typography component="p">{mainSectionText}</Typography>
      <div className={styles.priceBlock}>
        <Typography component="h5" color="dark-grey">
          {doctor?.price ?? service?.price}
        </Typography>
        <Typography component="h5" color="secondary">
          {doctor?.discountPrice ?? service?.price} грн
        </Typography>
      </div>
    </div>
  );

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
          <div className={styles.serviceInfoDesktop}>{serviceInfo}</div>
        </div>
      </div>
      <div className={styles.serviceInfoMobile}>{serviceInfo}</div>
      <div className={classNames(styles.block, styles.blockCenter)}>
        <div>
          <Typography component="p" color="secondary" className={styles.blockTitle}>
            № ваучера
          </Typography>
          <Typography component="h5" weight="medium">
            {number}
          </Typography>
        </div>
      </div>
      <div className={classNames(styles.block, styles.blockCenter)}>
        <div>
          <Typography component="p" color="secondary" className={styles.blockTitle}>
            Дата створенняя
          </Typography>
          <Typography component="h5" weight="medium">
            {formatDate(createdAt)}
          </Typography>
        </div>
      </div>
      <div className={classNames(styles.block, styles.blockCenter)}>
        <div>
          <Typography component="p" color="secondary" className={styles.blockTitle}>
            Термін дії
          </Typography>
          <Typography
            component="h5"
            weight="medium"
            color={status === OrderStatus.UnActive ? 'dangerous' : 'black'}>
            {formatDate(endDate)}
          </Typography>
        </div>
      </div>
      <div className={classNames(styles.block, styles.statusBlock)}>
        <div>
          {!!status && (
            <>
              <div className={classNames(styles.status, statusData[status].styles)}>
                <span />
                <Typography component="p">{statusData[status].title}</Typography>
              </div>
              <div className={styles.statusButton}>
                <OrderButton
                  serviceId={service?.id}
                  status={status}
                  buttonText={statusData[status].buttonText}
                  doctorId={doctor?.id}
                  clinicId={service?.clinic?.id}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Order: FC<CartTypes.Order> = ({ orderItems, number }) => {
  return (
    <div className={styles.order}>
      <Typography component="h3" key={number}>
        Замовлення №{number}
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
  if (orders.length === 0)
    return (
      <Typography component="h3" className={styles.message}>
        У вас поки немає жодного замовлення
      </Typography>
    );

  return (
    <div>
      {orders.map(order => {
        if (!order) return null;

        return <Order key={order.id} {...order} />;
      })}
    </div>
  );
};

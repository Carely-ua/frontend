import { FC } from 'react';
import Link from 'next/link';
import { Button, Typography } from '@/ui-kit';
import { ServicesTypes } from '@/services';
import { ServiceType } from '@/utils/graphql/__generated__/types';
import { PriceBlock } from '../price-block';
import { AddToBagButton } from '../add-to-bag-button';
import { ConsultationItems } from '../consultation-items';
import styles from './ServicePanel.module.scss';

export interface SubcategoryProps {
  id: string;
  title: string;
  services?: ServicesTypes.Services;
  showPrice?: boolean;
}

const ServiceItem: FC<any> = ({ id, name, showPrice, price, subcategoryId }) => {
  return (
    <div key={id} className={styles.serviceItem}>
      <Typography component="h3" weight="medium">
        {name}
      </Typography>
      {showPrice ? (
        <div className={styles.buyInfo}>
          <div className={styles.price}>
            <PriceBlock secondPrice={price} firstPrice={120} />
          </div>
          <div className={styles.addToCartButton}>
            <AddToBagButton serviceId={id} />
          </div>
        </div>
      ) : (
        <Link href={`/services/${subcategoryId}`}>
          <Button>Обрати</Button>
        </Link>
      )}
    </div>
  );
};

export const Subcategory: FC<SubcategoryProps> = ({
  id: subcategoryId,
  title,
  services,
  showPrice = true,
}) => {
  if (!services) return null;

  return (
    <div>
      <Typography component="h2" color="primary" gutterBottom="xlg">
        {title}
      </Typography>
      {services.map(service => {
        if (!service) return null;

        const { id, name, price } = service;

        return (
          <ServiceItem
            key={id}
            id={id}
            name={name}
            showPrice={showPrice}
            price={price}
            subcategoryId={subcategoryId}
          />
        );
      })}
    </div>
  );
};

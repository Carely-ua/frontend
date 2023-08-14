import { FC } from 'react';
import { Button, Typography } from '@/ui-kit';
import { ServicesTypes } from '@/services';
import { PriceBlock } from '../price-block';
import { AddToBagButton } from '../add-to-bag-button';
import styles from './ServicePanel.module.scss';

export interface SubcategoryProps {
  title: string;
  services?: ServicesTypes.Services;
  showPrice?: boolean;
}

export const Subcategory: FC<SubcategoryProps> = ({ title, services, showPrice = true }) => {
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
          <div key={id} className={styles.serviceItem}>
            <Typography component="h3" weight="medium">
              {name}
            </Typography>
            {showPrice ? (
              <div className={styles.buyInfo}>
                <PriceBlock secondPrice={price} firstPrice={120} />
                <div className={styles.addToCartButton}>
                  <AddToBagButton serviceId={id} />
                </div>
              </div>
            ) : (
              <div>
                <Button>Обрати</Button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

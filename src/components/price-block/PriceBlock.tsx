import { FC } from 'react';
import { Typography } from '@/ui-kit';
import styles from './PriceBlock.module.scss';

interface PriceBlock {
  firstPrice: number;
  secondPrice: number;
}

export const PriceBlock: FC<PriceBlock> = ({ firstPrice, secondPrice }) => {
  return (
    <div>
      <div className={styles.priceItem}>
        <Typography component="p" color="dark-grey">
          Ціна в клініці
        </Typography>
        <Typography component="h4" weight="medium">
          {firstPrice} грн
        </Typography>
      </div>
      <div className={styles.priceItem}>
        <Typography component="p" color="dark-grey">
          Ціна Carely
        </Typography>
        <Typography component="h4" color="secondary" weight="medium">
          {secondPrice} грн
        </Typography>
      </div>
    </div>
  );
};

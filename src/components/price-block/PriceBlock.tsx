import { FC } from 'react';
import classNames from 'classnames';
import { Typography } from '@/ui-kit';
import styles from './PriceBlock.module.scss';

interface PriceBlock {
  firstPrice?: number | null;
  secondPrice?: number | null;
  flexStart?: boolean;
}

export const PriceBlock: FC<PriceBlock> = ({ firstPrice, secondPrice, flexStart }) => {
  return (
    <div>
      <div className={classNames(styles.priceItem, { [styles.priceItemStart]: flexStart })}>
        <Typography component="p" color="dark-grey">
          Ціна в клініці
        </Typography>
        <Typography component="h4" weight="medium">
          {firstPrice} грн
        </Typography>
      </div>
      <div className={classNames(styles.priceItem, { [styles.priceItemStart]: flexStart })}>
        <Typography component="p" color="dark-grey">
          Ціна з Carely
        </Typography>
        <Typography component="h4" color="secondary" weight="medium">
          {secondPrice} грн
        </Typography>
      </div>
    </div>
  );
};

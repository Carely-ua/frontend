'use client';

import { FC } from 'react';
import { Button } from '@/ui-kit';
import { OrderStatus } from '@/utils/graphql/__generated__/types';

interface OrderButtonProps {
  status: OrderStatus;
  buttonText: string;
}

export const OrderButton: FC<OrderButtonProps> = ({ status, buttonText }) => {
  const onClickHandler = () => {
    if (status === OrderStatus.Active) {
      console.log('Active');
    } else if (status === OrderStatus.Done) {
      console.log('Done');
    } else {
      console.log('unActive');
    }
  };

  return (
    <Button onClick={onClickHandler} buttonType="secondary">
      {buttonText}
    </Button>
  );
};

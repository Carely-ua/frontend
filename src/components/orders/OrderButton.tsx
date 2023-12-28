'use client';

import { FC } from 'react';
import { Button } from '@/ui-kit';
import { OrderStatus } from '@/utils/graphql/__generated__/types';
import { useModalContext } from '@/utils/client';

interface OrderButtonProps {
  status: OrderStatus;
  buttonText: string;
  serviceId?: string;
  doctorId?: string;
  clinicId?: string;
  orderItemId?: string;
  reviewed?: boolean | null;
}

export const OrderButton: FC<OrderButtonProps> = ({
  status,
  buttonText,
  serviceId,
  doctorId,
  clinicId,
  orderItemId,
  reviewed,
}) => {
  const { openModal } = useModalContext();

  const onClickHandler = () => {
    if (status === OrderStatus.Active) {
      console.log('Active');
    } else if (status === OrderStatus.Done) {
      openModal('AddReviewModal', {
        serviceId,
        doctorId,
        clinicId,
        orderItemId,
      });
    } else {
      console.log('unActive');
    }
  };

  if (status === OrderStatus.Done && reviewed) {
    return null;
  }

  return (
    <Button onClick={onClickHandler} buttonType="secondary">
      {buttonText}
    </Button>
  );
};

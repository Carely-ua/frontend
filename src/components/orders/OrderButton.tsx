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
}

export const OrderButton: FC<OrderButtonProps> = ({
  status,
  buttonText,
  serviceId,
  doctorId,
  clinicId,
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
      });
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

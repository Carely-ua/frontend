'use client';

import { FC } from 'react';
import { Button } from '@/ui-kit';
import { OrderStatus } from '@/utils/graphql/__generated__/types';
import { useModalContext } from '@/utils/client';
import { useAddToCart } from '@/services/cart/add-to-cart';

interface OrderButtonProps {
  status: OrderStatus;
  buttonText: string;
  serviceId?: string;
  doctorId?: string;
  clinicId?: string;
  orderItemId?: string;
  reviewed?: boolean | null;
  name?: string;
  img?: string | null;
  title?: string;
  isConsultation?: boolean;
  phones: Array<string>;
}

export const OrderButton: FC<OrderButtonProps> = ({
  status,
  buttonText,
  serviceId,
  doctorId,
  clinicId,
  orderItemId,
  reviewed,
  name,
  title,
  img,
  isConsultation,
  phones,
}) => {
  const { openModal } = useModalContext();
  const { addToCart } = useAddToCart();

  const onClickHandler = () => {
    if (status === OrderStatus.Active) {
      openModal('PhoneModal', { phones });
    } else if (status === OrderStatus.Done) {
      openModal('AddReviewModal', {
        serviceId,
        doctorId,
        clinicId,
        orderItemId,
        name,
        img,
        title,
        isConsultation,
      });
    } else if (status === OrderStatus.UnActive) {
      addToCart({ serviceId, doctorId });
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

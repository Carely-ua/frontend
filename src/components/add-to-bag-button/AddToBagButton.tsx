'use client';

import { FC, SyntheticEvent } from 'react';
import { Button, ButtonProps } from '@/ui-kit';
import { useAddToCart } from '@/services/cart/add-to-cart';

interface AddToBagButtonProps extends Pick<ButtonProps, 'buttonType'> {
  serviceId: string;
  doctorId?: string;
}

export const AddToBagButton: FC<AddToBagButtonProps> = ({ buttonType, serviceId, doctorId }) => {
  const { addToCart } = useAddToCart();

  const addToCartHandler = async (e: SyntheticEvent<any>) => {
    e.stopPropagation();
    await addToCart({ serviceId, doctorId });
    console.log('product added successfully');
  };

  return (
    <Button onClick={addToCartHandler} buttonType={buttonType}>
      В кошик
    </Button>
  );
};

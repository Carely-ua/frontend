'use client';

import { FC, SyntheticEvent } from 'react';
import { useSnackbar } from 'notistack';
import { Button, ButtonProps } from '@/ui-kit';
import { useAddToCart } from '@/services/cart/add-to-cart';

interface AddToBagButtonProps extends Pick<ButtonProps, 'buttonType'> {
  serviceId: string;
  doctorId?: string;
}

export const AddToBagButton: FC<AddToBagButtonProps> = ({ buttonType, serviceId, doctorId }) => {
  const { addToCart } = useAddToCart();
  const { enqueueSnackbar } = useSnackbar();

  const addToCartHandler = async (e: SyntheticEvent<any>) => {
    e.preventDefault();
    await addToCart({ serviceId, doctorId });
    enqueueSnackbar('Послуга успішно додана в кошик', { variant: 'snackbar' });
  };

  return (
    <Button onClick={addToCartHandler} buttonType={buttonType}>
      В кошик
    </Button>
  );
};

'use client';

import { FC } from 'react';
import { useSession } from 'next-auth/react';
import { Button, ButtonProps } from '@/ui-kit';
import { useAddToCart } from '@/services/cart/add-to-cart';
import { useModalContext } from '@/utils/client';

interface AddToBagButtonProps extends Pick<ButtonProps, 'buttonType'> {
  serviceId: string;
  doctorId?: string;
}

export const AddToBagButton: FC<AddToBagButtonProps> = ({ buttonType, serviceId, doctorId }) => {
  const { addToCart } = useAddToCart();
  const { data: session } = useSession();
  const { openModal } = useModalContext();

  const _addToCart = async () => {
    //TODO: fix it, since this function execute immediately after sign in, auth token is empty
    return await addToCart({ serviceId, doctorId });
  };

  const addToCartHandler = async () => {
    //TODO: we need only _addToCart here
    if (session) {
      await _addToCart();
      openModal('SuccessAddedToCartModal');
    } else {
      openModal('AddToBagAuthModal', { addToBagHandler: _addToCart });
    }
  };

  return (
    <Button onClick={addToCartHandler} buttonType={buttonType}>
      В кошик
    </Button>
  );
};

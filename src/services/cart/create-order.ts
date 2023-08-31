import { useMutation } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { CreateOrderDocument } from './graphql/__generated__/CreateOrder';

export const useCreateOrder = () => {
  const { data: session } = useSession();
  const [_createOrder] = useMutation(CreateOrderDocument);

  const createOrder = async () => {
    return await _createOrder({
      context: {
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
        },
      },
    });
  };

  return { createOrder };
};

import { useMutation } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { DestroyCartItemDocument } from './graphql/__generated__/DestroyCartItem';

export const useDestroyCartItem = () => {
  const { data: session } = useSession();
  const [_destroyCartItem] = useMutation(DestroyCartItemDocument);

  const destroyCartItem = async (id: string) => {
    return await _destroyCartItem({
      variables: { id },
      refetchQueries: ['AddToCart'],
      context: {
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
        },
      },
    });
  };

  return { destroyCartItem };
};

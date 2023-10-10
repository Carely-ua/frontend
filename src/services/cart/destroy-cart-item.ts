import { useMutation } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { DestroyCartItemDocument } from './graphql/__generated__/DestroyCartItem';
import { useCartForUnAuthUser } from './cart-for-un-auth-user';

export const useDestroyCartItem = () => {
  const { data: session } = useSession();
  const [_destroyCartItem] = useMutation(DestroyCartItemDocument);
  const { deleteCartItem } = useCartForUnAuthUser();

  const destroyCartItem = async (id: string) => {
    const token = session?.user?.token;

    if (token) {
      return await _destroyCartItem({
        variables: { id },
        refetchQueries: ['GetCart'],
        context: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      });
    }

    deleteCartItem(id);
  };

  return { destroyCartItem };
};

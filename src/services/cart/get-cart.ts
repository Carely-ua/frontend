import { useSession } from 'next-auth/react';
//TODO check if it's correct import
import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { GetCartDocument } from './graphql/__generated__/GetCart';

export const useGetCart = () => {
  const { data: session } = useSession();
  const [getCart, { data }] = useLazyQuery(GetCartDocument);

  useEffect(() => {
    const token = session?.user?.token;
    if (token) {
      getCart({
        context: {
          headers: {
            Authorization: `Bearer ${session?.user?.token}`,
          },
        },
      });
    }
  }, [getCart, session?.user?.token]);

  return { data };
};

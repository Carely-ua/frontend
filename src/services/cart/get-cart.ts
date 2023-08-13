import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { useSession } from 'next-auth/react';
import { query } from '@/utils/server';
import { GetCartDocument } from './graphql/__generated__/GetCart';

export const useGetCart = () => {
  const { data: session } = useSession();
  const { data } = useQuery(GetCartDocument, {
    context: {
      headers: {
        Authorization: `Bearer ${session?.user?.token}`,
      },
    },
  });

  return { data };
};

// export const getCart = async () => {
//   const { data } = await query({ query: GetCartDocument });

//   return { data };
// };

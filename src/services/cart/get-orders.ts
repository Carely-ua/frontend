import { query } from '@/utils/server';
import { GetOrdersDocument } from './graphql/__generated__/GetOrders';

export const getOrders = async () => {
  const { data } = await query({
    query: GetOrdersDocument,
  });

  return { data };
};

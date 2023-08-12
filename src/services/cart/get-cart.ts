import { query } from '@/utils/server';
import { GetCartDocument } from './graphql/__generated__/GetCart';

export const getCart = async () => {
  const { data } = await query({ query: GetCartDocument });

  return { data };
};

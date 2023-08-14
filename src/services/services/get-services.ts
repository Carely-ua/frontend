import { query } from '@/utils/server';
import {
  GetCategoriesDocument,
  GetCategoriesQueryVariables,
} from './graphql/__generated__/GetCategories';

export const getServices = async (
  serviceType: GetCategoriesQueryVariables['filters']['serviceType'],
) => {
  const { data } = await query({
    query: GetCategoriesDocument,
    variables: {
      filters: {
        serviceType,
      },
    },
  });

  return { data };
};

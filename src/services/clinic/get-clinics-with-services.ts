import { query } from '@/utils/server';
import {
  GetClinicsWithServicesDocument,
  GetClinicsWithServicesQueryVariables,
} from './graphql/__generated__/GetClinicsWithServices';

export const getClinicsWithServices = async (
  filters: GetClinicsWithServicesQueryVariables['filters'],
) => {
  const { data } = await query({
    query: GetClinicsWithServicesDocument,
    variables: {
      filters,
    },
  });

  return { data };
};

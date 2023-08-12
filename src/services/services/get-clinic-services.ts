import { query } from '@/utils/server';
import {
  GetServicesDocument,
  GetServicesQueryVariables,
} from './graphql/__generated__/GetClinicServices';

export const getClinicServices = async (
  clinicId: string,
  serviceType: GetServicesQueryVariables['filters']['serviceType'],
) => {
  const { data } = await query({
    query: GetServicesDocument,
    variables: {
      filters: {
        clinicId,
        serviceType,
      },
    },
  });

  return { data };
};

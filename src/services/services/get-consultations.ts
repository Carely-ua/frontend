import { query } from '@/utils/server';
import { ServiceType } from '@/utils/graphql/__generated__/types';
import { GetConsultationsDocument } from './graphql/__generated__/GetConsultations';

export const getConsultations = async () => {
  const { data } = await query({
    query: GetConsultationsDocument,
    variables: {
      filters: {
        serviceType: ServiceType.Consultations,
      },
    },
  });

  return { data };
};

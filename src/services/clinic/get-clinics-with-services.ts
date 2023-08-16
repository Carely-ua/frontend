import { query } from '@/utils/server';
import { GetClinicsWithServicesDocument } from './graphql/__generated__/GetClinicsWithServices';

export const getClinicsWithServices = async (subcategoryId: string) => {
  const { data } = await query({
    query: GetClinicsWithServicesDocument,
    variables: {
      filters: {
        categorySubTitleId: subcategoryId,
      },
    },
  });

  return { data };
};

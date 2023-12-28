import { query } from '@/utils/server';
import { CheckClinicAnalyseDocument } from './graphql/__generated__/CheckClinicAnalyse';

export const checkClinicAnalyse = async (id: string) => {
  const { data } = await query({
    query: CheckClinicAnalyseDocument,
    variables: {
      filters: {
        id,
      },
    },
  });

  return data;
};

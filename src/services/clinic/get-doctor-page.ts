import { query } from '@/utils/server';
import { GetDoctorPageDocument } from './graphql/__generated__/GetDoctorPage';

export const getDoctorPage = async (doctorId: string, serviceId: string) => {
  const { data } = await query({
    query: GetDoctorPageDocument,
    variables: {
      filters: {
        doctorId,
        id: serviceId,
      },
    },
  });

  return { data };
};

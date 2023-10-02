import { query } from '@/utils/server';
import { GetDoctorPageDocument } from './graphql/__generated__/GetDoctorPage';

export const getDoctorPage = async (doctorId: string, serviceId: string) => {
  const { data } = await query({
    query: GetDoctorPageDocument,
    variables: {
      filtersForDoctor: {
        id: doctorId,
      },
      filtersForService: {
        id: serviceId,
      },
    },
  });

  return { doctor: data.doctor, service: data.service };
};

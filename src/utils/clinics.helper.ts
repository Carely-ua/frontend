import { redirect } from 'next/navigation';
import { ClinicType } from './graphql/__generated__/types';

export const checkClinicType = (clinicType: string) => {
  if (clinicType !== 'clinics' && clinicType !== 'labs') {
    redirect('/');
  }
};

export const getClinicType = (clinicType: string) => {
  if (clinicType === 'labs') {
    return ClinicType.Laboratory;
  }

  return ClinicType.Clinic;
};

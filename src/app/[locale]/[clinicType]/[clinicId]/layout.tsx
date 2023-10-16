import { ReactNode, FC, useMemo } from 'react';
import { Breadcrumbs, ClinicAdditionalInfo, ClinicMainInfo } from '@/components';
import { getClinic } from '@/services';
import { ServiceType } from '@/utils/graphql/__generated__/types';
import { checkClinicType } from '@/utils';

interface ClinicLayoutProps {
  children: ReactNode;
  params: {
    clinicType: 'clinics' | 'labs';
    clinicId: string;
    serviceData?: [ServiceType, string | undefined];
  };
}

const CLINIC_TYPES = {
  clinics: 'Клініки',
  labs: 'Лабораторії',
};

const ClinicLayout: FC<ClinicLayoutProps> = async ({ children, params }) => {
  const { clinicType, clinicId } = params;

  checkClinicType(clinicType);
  const { data } = await getClinic(clinicId);
  console.log('data', data);

  if (!data.clinic) return '...error';

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: CLINIC_TYPES[clinicType], path: `/${clinicType}` },
          { label: data.clinic.name, path: '/' },
        ]}
      />
      <ClinicMainInfo {...data.clinic} />
      {children}
      <ClinicAdditionalInfo {...data.clinic} />
    </>
  );
};

export default ClinicLayout;

import { ReactNode, FC } from 'react';
import { ClinicMainInfo } from '@/components';
import { getClinic } from '@/services';
import { ServiceType } from '@/utils/graphql/__generated__/types';
import { checkClinicType } from '@/utils';

interface ClinicLayoutProps {
  children: ReactNode;
  params: {
    clinicType: string;
    clinicId: string;
    serviceData?: [ServiceType, string | undefined];
  };
}

const ClinicLayout: FC<ClinicLayoutProps> = async ({ children, params }) => {
  checkClinicType(params.clinicType);
  const { data } = await getClinic(params.clinicId);

  if (!data.clinic) return '...error';

  return (
    <>
      {/* TODO: delete reviewAmount and workingHours  */}
      <ClinicMainInfo reviewAmount={433} workingHours="з 9:00-17:00" {...data.clinic} />
      {children}
    </>
  );
};

export default ClinicLayout;
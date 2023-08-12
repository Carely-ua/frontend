import { ClinicServicesNavigation, ServicePanel } from '@/components';
import { getClinicType } from '@/utils';
//TODO fix this import;
import { ClinicType, ServiceType } from '@/utils/graphql/__generated__/types';

interface ClinicParams {
  params: {
    clinicType: string;
    clinicId: string;
    serviceData?: [ServiceType, string | undefined];
  };
}

const ServicesSection = async ({ params }: ClinicParams) => {
  const serviceType = params.serviceData?.[0] || ServiceType.Analyse;
  const categoryId = params.serviceData?.[1];
  const clinicType = getClinicType(params.clinicType);

  const showServicesPanel = clinicType === ClinicType.Clinic;

  return (
    <>
      {showServicesPanel && (
        <ClinicServicesNavigation clinicId={params.clinicId} serviceType={serviceType} />
      )}
      <ServicePanel serviceType={serviceType} clinicId={params.clinicId} categoryId={categoryId} />
    </>
  );
};

export default ServicesSection;

import { ClinicServicesNavigation, ServicePanel } from '@/components';
import { ServiceType } from '@/utils/graphql/__generated__/types';

interface ClinicParams {
  params: {
    clinicId: string;
    serviceData?: [ServiceType, string | undefined];
  };
}

const ServicesSection = async ({ params }: ClinicParams) => {
  // const { data } = await getClinic(params.clinicId);
  const serviceType = params.serviceData?.[0] || ServiceType.Analyse;

  return (
    <>
      <ClinicServicesNavigation clinicId={params.clinicId} serviceType={serviceType} />
      <ServicePanel serviceType={serviceType} />
    </>
  );
};

export default ServicesSection;

import { ClinicMainInfo, ClinicServices } from '@/components';
import { getClinic, getClinics } from '@/services';

type ServiceType = 'analyzes' | 'consultations' | 'diagnostics';

interface ClinicParams {
  params: {
    clinicId: string;
    serviceData?: [ServiceType, string | undefined];
  };
}

const ServicesSection = async ({ params }: ClinicParams) => {
  // const { data } = await getClinic(params.clinicId);
  console.log('params', params);

  return <>{params.serviceData?.[0]}</>;
};

export default ServicesSection;

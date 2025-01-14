import { redirect } from 'next/navigation';
import { ClinicServicesNavigation, ServicePanel } from '@/components';
import { checkClinicAnalyse, getClinicServices } from '@/services';
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
  const { clinic } = await checkClinicAnalyse(params.clinicId);
  const serviceType =
    params.serviceData?.[0] ||
    (clinic?.hasAnalyse ? ServiceType.Analyse : ServiceType.Consultations);
  const categoryId = params.serviceData?.[1];
  const clinicType = getClinicType(params.clinicType);

  const isClinic = clinicType === ClinicType.Clinic;

  const { data } = await getClinicServices(params.clinicId, serviceType);
  const baseUrl = `/${isClinic ? 'clinics' : 'labs'}/${params.clinicId}/${serviceType}`;

  return (
    <>
      {isClinic && (
        <ClinicServicesNavigation
          hideAnalyse={!clinic?.hasAnalyse}
          clinicId={params.clinicId}
          serviceType={serviceType}
        />
      )}
      {data.getServices && (
        <ServicePanel
          baseUrl={baseUrl}
          categories={data.getServices}
          serviceType={serviceType}
          categoryId={categoryId}
        />
      )}
    </>
  );
};

export default ServicesSection;

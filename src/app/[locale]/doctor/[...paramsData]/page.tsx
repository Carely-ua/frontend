import { PageSearch, DoctorProfile } from '@/components';
import { getDoctorPage } from '@/services';

interface DoctorPageProps {
  params: {
    paramsData: [id: string, serviceId: string];
  };
}

const DoctorPage = async ({ params }: DoctorPageProps) => {
  const { doctor, service } = await getDoctorPage(...params.paramsData);

  return (
    <>
      <PageSearch title="Консультації у Вінниці" icon="Doctor" />
      <DoctorProfile doctor={doctor} service={service} />
    </>
  );
};

export default DoctorPage;

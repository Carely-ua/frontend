import { ClinicMainInfo, ClinicServices, SidebarNavigation } from '@/components';

const ClinicLayout = ({ params, children }) => {
  return (
    <>
      <ClinicMainInfo
        image={''}
        name='Багатопрофільний комплекс психіатрії та наркології "РЕНЕСАНС"'
        rating={5}
        reviewAmount={433}
        address="вулиця Пирогова, 34, Вінниця, Вінницька область, 21000"
        workingHours="з 9:00-17:00"
      />
      <ClinicServices clinicId={params.clinicId} />
      <SidebarNavigation>null</SidebarNavigation>
      {children}
    </>
  );
};

export default ClinicLayout;

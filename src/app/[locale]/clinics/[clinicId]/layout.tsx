import { ReactNode, FC } from 'react';
import { ClinicMainInfo } from '@/components';

interface ClinicLayoutProps {
  children: ReactNode;
}

const ClinicLayout: FC<ClinicLayoutProps> = ({ children }) => {
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
      {children}
    </>
  );
};

export default ClinicLayout;

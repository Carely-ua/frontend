import { FC } from 'react';
import { ClinicServicesNavigation } from './components';

interface ClinicServicesProps {
  clinicId: string;
}

export const ClinicServices: FC<ClinicServicesProps> = ({ clinicId }) => {
  return (
    <div>
      <ClinicServicesNavigation clinicId={clinicId} />
    </div>
  );
};

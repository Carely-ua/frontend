import { FC } from 'react';
import Link from 'next/link';

interface ClinicServicesNavigationProps {
  clinicId: string;
}

export const ClinicServicesNavigation: FC<ClinicServicesNavigationProps> = ({ clinicId }) => {
  return (
    <div>
      <Link href={`/clinics/${clinicId}/analyzes`}>Аналізи</Link>
      <Link href={`/clinics/${clinicId}/consultations`}>Консультації</Link>
      <Link href={`/clinics/${clinicId}/diagnostics`}>Діагностика</Link>
    </div>
  );
};

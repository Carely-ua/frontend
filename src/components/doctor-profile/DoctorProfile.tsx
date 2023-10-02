import { FC } from 'react';
import { ClinicTypes } from '@/services';
import { Typography } from '@/ui-kit';
import { ConsultationItem } from '../consultation-items';
import { Map } from '../map';
import { GeneralClinicCart } from '../clinic-card';
import styles from './DoctorProfile.module.scss';

interface DoctorProfileProps {
  doctor: ClinicTypes.Doctor;
  service: ClinicTypes.Service;
}

export const DoctorProfile: FC<DoctorProfileProps> = ({ doctor, service }) => {
  if (!doctor || !service) return null;
  const { id, price, discountPrice } = service;

  return (
    <div className={styles.wrapper}>
      <div className={styles.doctorInfo}>
        <ConsultationItem
          serviceId={id}
          id={''}
          {...doctor}
          discountPrice={discountPrice}
          price={price}>
          <>
            <Typography component="h4" className={styles.description}>
              {doctor.description}
            </Typography>
            {!!doctor.clinic && (
              <div className={styles.clinicCard}>
                <GeneralClinicCart hrefPrefix="clinics" {...doctor.clinic} />
              </div>
            )}
          </>
        </ConsultationItem>
      </div>
      <Map data={[]} />
    </div>
  );
};

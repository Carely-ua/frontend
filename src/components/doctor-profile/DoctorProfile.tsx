import { FC, useMemo } from 'react';
import { Typography } from '@/ui-kit';
import { GetDoctorPageQuery } from '@/services/clinic/graphql/__generated__/GetDoctorPage';
import { ConsultationItem } from '../consultation-items';
import { Map } from '../map';
import { GeneralClinicCart } from '../clinic-card';
import { Reviews } from '../reviews';
import styles from './DoctorProfile.module.scss';

interface DoctorProfileProps {
  data: GetDoctorPageQuery;
}

export const DoctorProfile: FC<DoctorProfileProps> = ({ data }) => {
  const { id, doctors, clinic } = data.service || {};

  const doctor = doctors?.[0];
  const { id: clinicId, mainImage, mapCoordinates } = clinic || {};

  const mapData = useMemo(
    () => ({
      rating: doctor?.rating,
      id: clinicId,
      mainImage,
      mapCoordinates,
    }),
    [doctor?.rating, clinicId, mainImage, mapCoordinates],
  );

  if (!doctor) return null;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.doctorInfo}>
          <ConsultationItem serviceId={id || ''} {...doctor}>
            {!!clinic && (
              <div className={styles.clinicCard}>
                <GeneralClinicCart hrefPrefix="/clinics" {...clinic} />
              </div>
            )}
          </ConsultationItem>
        </div>
        <div className={styles.map}>
          {/* @ts-ignore */}
          <Map data={mapData} />
        </div>
      </div>
      <Reviews rating={doctor.rating} reviews={doctor.reviews} reviewsCount={doctor.reviewsCount} />
    </>
  );
};

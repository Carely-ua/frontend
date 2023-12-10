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
  const { rating, id: clinicId, mainImage, mapCoordinates, reviews, reviewsCount } = clinic || {};

  const mapData = useMemo(
    () => ({
      rating,
      id: clinicId,
      mainImage,
      mapCoordinates,
    }),
    [rating, clinicId, mainImage, mapCoordinates],
  );

  if (!doctor) return null;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.doctorInfo}>
          <ConsultationItem serviceId={id || ''} {...doctor}>
            <>
              <Typography component="h5" className={styles.description}>
                {doctor.description}
              </Typography>
              {!!clinic && (
                <div className={styles.clinicCard}>
                  <GeneralClinicCart hrefPrefix="/clinics" {...clinic} />
                </div>
              )}
            </>
          </ConsultationItem>
        </div>
        <div className={styles.map}>
          {/* @ts-ignore */}
          <Map data={mapData} />
        </div>
      </div>
      <Reviews rating={rating} reviews={reviews} reviewsCount={reviewsCount} />
    </>
  );
};

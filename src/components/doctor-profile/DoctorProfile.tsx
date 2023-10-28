import { FC, useMemo } from 'react';
import { ClinicTypes } from '@/services';
import { Typography } from '@/ui-kit';
import { ConsultationItem } from '../consultation-items';
import { Map } from '../map';
import { GeneralClinicCart } from '../clinic-card';
import { Reviews } from '../reviews';
import styles from './DoctorProfile.module.scss';

interface DoctorProfileProps {
  doctor: ClinicTypes.Doctor;
  service: ClinicTypes.Service;
}

export const DoctorProfile: FC<DoctorProfileProps> = ({ doctor, service }) => {
  const {
    rating,
    id: clinicId,
    mainImage,
    mapCoordinates,
    reviews,
    reviewsCount,
  } = doctor?.clinic || {};

  const mapData = useMemo(
    () => ({
      rating,
      id: clinicId,
      mainImage,
      mapCoordinates,
    }),
    [rating, clinicId, mainImage, mapCoordinates],
  );

  if (!doctor || !service) return null;
  const { id, price, discountPrice } = service;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.doctorInfo}>
          <ConsultationItem serviceId={id} {...doctor} discountPrice={discountPrice} price={price}>
            <>
              <Typography component="h5" className={styles.description}>
                {doctor.description}
              </Typography>
              {!!doctor.clinic && (
                <div className={styles.clinicCard}>
                  <GeneralClinicCart hrefPrefix="/clinics" {...doctor.clinic} />
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

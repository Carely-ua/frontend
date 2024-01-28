'use client';

import { FC, useMemo } from 'react';
import Image from 'next/image';
import { Typography } from '@/ui-kit';
import { isMobileScreen } from '@/utils';
import { ClinicTypes } from '@/services';
import { Rating, RatingProps } from '../rating';
import { ClinicExtraInfo } from '../clinic-extra-info';
import { Map, MapItemProps } from '../map';
import { PhoneButton } from '../phone-button';
import styles from './ClinicMainInfo.module.scss';

const containerStyle = {
  width: '100%',
  height: isMobileScreen() ? '108px' : '270px',
};

interface ClinicMainInfoProps extends RatingProps, MapItemProps {
  name: string;
  phone: string;
}

export const ClinicMainInfo: FC<ClinicTypes.ClinicPageData> = ({
  mainImage,
  id,
  rating,
  reviewsCount,
  name,
  clinicDepartments,
  phone,
}) => {
  const mapData = useMemo(
    () => ({
      rating,
      id,
      mainImage,
      // mapCoordinates,
    }),
    [rating, id, mainImage],
  );

  return (
    <div className={styles.clinicMainInfo}>
      <div className={styles.itemWrapper}>
        <div className={styles.item}>
          <div className={styles.image}>
            {!!mainImage && (
              <Image src={mainImage} alt="clinic" layout="fill" objectFit="contain" />
            )}
          </div>
          <div className={styles.clinicInfo}>
            <div className={styles.topSection}>
              <Rating rating={rating} reviewsCount={reviewsCount} />
            </div>
            <div className={styles.nameWrapper}>
              <Typography className={styles.name} component="h2">
                {name}
              </Typography>
              <PhoneButton phones={phone || []} />
            </div>
          </div>
        </div>
        <div className={styles.extraInfo}>
          {clinicDepartments?.map(department => {
            if (!department) return null;

            return <ClinicExtraInfo key={department.id} {...department} />;
          })}
        </div>
      </div>
      <div className={styles.item}>
        {/* @ts-ignore */}
        <Map data={mapData} containerStyle={containerStyle} smallMap />
      </div>
    </div>
  );
};

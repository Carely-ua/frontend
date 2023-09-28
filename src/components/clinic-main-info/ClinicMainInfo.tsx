'use client';

import { FC, useMemo } from 'react';
import Image from 'next/image';
import { Typography } from '@/ui-kit';
import { isMobileScreen } from '@/utils';
import { Rating, RatingProps } from '../rating';
import { ClinicExtraInfo, ClinicExtraInfoProps } from '../clinic-extra-info';
import { Map, MapItemProps } from '../map';
import styles from './ClinicMainInfo.module.scss';

const containerStyle = {
  width: '100%',
  height: isMobileScreen() ? '108px' : '270px',
};

interface ClinicMainInfoProps extends RatingProps, ClinicExtraInfoProps, MapItemProps {
  name: string;
}

export const ClinicMainInfo: FC<ClinicMainInfoProps> = ({
  mainImage,
  id,
  rating,
  reviewsCount,
  name,
  address,
  workingTime,
  mapCoordinates,
}) => {
  const mapData = useMemo(
    () => ({
      rating,
      id,
      mainImage,
      mapCoordinates,
    }),
    [rating, id, mainImage, mapCoordinates],
  );

  return (
    <div className={styles.clinicMainInfo}>
      <div className={styles.item}>
        <div className={styles.image}>
          {!!mainImage && <Image src={mainImage} alt="clinic" layout="fill" objectFit="contain" />}
        </div>
        <div className={styles.clinicInfo}>
          <div className={styles.rating}>
            <Rating rating={rating} reviewsCount={reviewsCount} />
          </div>
          <Typography className={styles.name} component="h2">
            {name}
          </Typography>
          <ClinicExtraInfo address={address} workingTime={workingTime} />
        </div>
      </div>
      <div className={styles.item}>
        {/* @ts-ignore */}
        <Map data={mapData} containerStyle={containerStyle} smallMap />
      </div>
    </div>
  );
};

import { FC } from 'react';
import Image from 'next/image';
import { Typography } from '@/ui-kit';
import { Rating, RatingProps } from '../rating';
import { ClinicExtraInfo, ClinicExtraInfoProps } from '../clinic-extra-info';
import styles from './ClinicMainInfo.module.scss';

const defaultImage = '/images/test-clinic-image.png';

interface ClinicMainInfoProps extends RatingProps, ClinicExtraInfoProps {
  image: string;
  name: string;
}

export const ClinicMainInfo: FC<ClinicMainInfoProps> = ({
  image,
  rating,
  reviewAmount,
  name,
  address,
  workingHours,
}) => {
  return (
    <div className={styles.clinicMainInfo}>
      <div className={styles.item}>
        <div className={styles.image}>
          <Image src={image || defaultImage} alt="clinic" width={270} height={270} />
        </div>
        <div className={styles.clinicInfo}>
          <div className={styles.rating}>
            <Rating rating={rating} reviewAmount={reviewAmount} />
          </div>
          <Typography className={styles.name} component="h2">
            {name}
          </Typography>
          <ClinicExtraInfo address={address} workingHours={workingHours} />
        </div>
      </div>
      <div className={styles.item}>map</div>
    </div>
  );
};

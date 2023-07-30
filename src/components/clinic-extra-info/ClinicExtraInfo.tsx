import { FC } from 'react';
import Image from 'next/image';
import { Typography } from '@/ui-kit';
import styles from './ClinicExtraInfo.module.scss';

export interface ClinicExtraInfoProps {
  address: string;
  workingHours: string;
}

export const ClinicExtraInfo: FC<ClinicExtraInfoProps> = ({ address, workingHours }) => {
  return (
    <div>
      <div className={styles.extraInfo}>
        <span className={styles.icon}>
          <Image src="/icons/location.svg" alt="location" width="16" height="16" />
        </span>
        <Typography component="p">{address}</Typography>
      </div>
      <div className={styles.extraInfo}>
        <span className={styles.icon}>
          <Image src="/icons/time.svg" alt="time" width="16" height="16" />
        </span>
        <Typography component="p" color="dark-grey">
          {workingHours}
        </Typography>
      </div>
    </div>
  );
};

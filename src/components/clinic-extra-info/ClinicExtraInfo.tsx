import { FC } from 'react';
import { Typography } from '@/ui-kit';
import { SVG } from '../svg';
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
          <SVG.Location width="16" height="16" />
        </span>
        <Typography component="p">{address}</Typography>
      </div>
      <div className={styles.extraInfo}>
        <span className={styles.icon}>
          <SVG.Time alt="time" width="16" height="16" />
        </span>
        <Typography component="p" color="dark-grey">
          {workingHours}
        </Typography>
      </div>
    </div>
  );
};

import { FC } from 'react';
import { Typography } from '@/ui-kit';
import { SVG } from '../svg';
import styles from './ClinicExtraInfo.module.scss';

export interface ClinicExtraInfoProps {
  departmentSpecializations?: Array<{
    __typename?: 'Specialization';
    title: string;
  } | null> | null;
  address?: string | null;
  workingTime?: string | null;
}

export const ClinicExtraInfo: FC<ClinicExtraInfoProps> = ({
  address,
  workingTime,
  departmentSpecializations,
}) => {
  const specialization = departmentSpecializations?.map(item => item?.title);
  return (
    <div>
      {!!specialization && (
        <Typography className={styles.specialization} component="p" gutterBottom="sm">
          {specialization.join(', ')}
        </Typography>
      )}
      <div className={styles.extraInfo}>
        <span className={styles.icon}>
          <SVG.Location width="16" height="16" />
        </span>
        <Typography component="p">{address}</Typography>T
      </div>
      <div className={styles.extraInfo}>
        <span className={styles.icon}>
          <SVG.Time width="16" height="16" />
        </span>
        <Typography component="p" color="dark-grey">
          {workingTime}
        </Typography>
      </div>
    </div>
  );
};

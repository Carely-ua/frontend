import { FC } from 'react';
import { Typography } from '@/ui-kit';
import { ClinicTypes } from '@/services';
import { SVG } from '../svg';
import styles from './ClinicExtraInfo.module.scss';

export const ClinicExtraInfo: FC<ClinicTypes.Department> = ({
  address,
  workingTime,
  specializations,
}) => {
  return (
    <div>
      {!!specializations && (
        <Typography className={styles.specialization} component="p" gutterBottom="sm">
          {specializations.join(', ')}
        </Typography>
      )}
      <div className={styles.extraInfo}>
        <span className={styles.icon}>
          <SVG.Location width="16" height="16" />
        </span>
        <Typography component="p">{address}</Typography>
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

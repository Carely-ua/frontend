import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { Typography } from '@/ui-kit';
import styles from './SectionIcon.module.scss';

export interface SectionIconProps {
  icon: string;
  serviceCount?: number;
  size?: 'sm' | 'lg';
}

export const SectionIcon: FC<SectionIconProps> = ({ icon, serviceCount, size = 'lg' }) => {
  return (
    <div className={styles.sectionIcon}>
      {!!serviceCount && (
        <Typography component="h2" color="white">
          {serviceCount}
        </Typography>
      )}
      <div className={classNames(styles.icon, styles[`icon-${size}`])}>
        <Image src={`/icons/${icon}.svg`} alt="icon" width={32} height={32} />
      </div>
    </div>
  );
};

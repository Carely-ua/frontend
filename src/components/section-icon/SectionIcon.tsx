import { FC } from 'react';
import classNames from 'classnames';
import { Typography } from '@/ui-kit';
import { SVG, SVGNameType } from '../svg';
import styles from './SectionIcon.module.scss';

export interface SectionIconProps {
  icon: SVGNameType;
  serviceCount?: number;
  size?: 'sm' | 'lg';
}

export const SectionIcon: FC<SectionIconProps> = ({ icon, serviceCount, size = 'lg' }) => {
  const Icon = SVG[icon];

  return (
    <div className={styles.sectionIcon}>
      {!!serviceCount && (
        <Typography component="h2" color="white">
          {serviceCount}
        </Typography>
      )}
      <div className={classNames(styles.icon, styles[`icon-${size}`])}>
        <Icon width={32} height={32} />
      </div>
    </div>
  );
};

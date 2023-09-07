import { FC } from 'react';
import classNames from 'classnames';
import { Typography } from '@/ui-kit';
import { SVG, SVGNameType } from '../svg';
import styles from './SectionIcon.module.scss';

export interface SectionIconProps {
  icon: SVGNameType;
  serviceCount?: number;
  size?: 'sm' | 'lg';
  width?: number;
  height?: number;
}

export const SectionIcon: FC<SectionIconProps> = ({
  icon,
  serviceCount,
  size = 'lg',
  width,
  height,
}) => {
  const Icon = SVG[icon];

  return (
    <div className={styles.sectionIcon}>
      {!!serviceCount && (
        <Typography component="h2" color="white">
          {serviceCount}
        </Typography>
      )}
      <div className={classNames(styles.icon, styles[`icon-${size}`])}>
        <Icon width={width} height={height} />
      </div>
    </div>
  );
};

'use client';

import Sticky from 'react-stickynode';
import { FC, useState } from 'react';
import classNames from 'classnames';
import { Map, MapProps } from '../map';
import styles from './Search.module.scss';

export const StickyMap: FC<MapProps> = ({ data }) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status: Sticky.Status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <Sticky bottomBoundary="#Search" onStateChange={handleStateChange}>
      <div
        className={classNames({
          [styles.mapContainer]: isSticky,
        })}>
        <Map data={data} />
      </div>
    </Sticky>
  );
};

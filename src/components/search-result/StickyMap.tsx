'use client';

import Sticky from 'react-stickynode';
import { useState } from 'react';
import classNames from 'classnames';
import { Map } from '../map';
import styles from './SearchResult.module.scss';

export const StickyMap = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status: Sticky.Status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <Sticky bottomBoundary="#searchResult" onStateChange={handleStateChange}>
      <div
        className={classNames({
          [styles.mapContainer]: isSticky,
        })}>
        <Map />
      </div>
    </Sticky>
  );
};

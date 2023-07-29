import { FC } from 'react';
import { OverlayView } from '@react-google-maps/api';
import Image from 'next/image';
import styles from './Marker.module.scss';

const center = {
  lat: 51.509865,
  lng: -0.118092,
};

interface MarkerProps {
  rating: string;
  image: string;
}

export const Marker: FC<MarkerProps> = ({ rating = 5 }) => {
  return (
    <OverlayView mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET} position={center}>
      <div className={styles.marker}>
        <div className={styles.rating}>
          <Image
            className={styles.icon}
            src="/icons/star.svg"
            alt="rating"
            width="10"
            height="10"
          />
          {rating}
        </div>
        <div className={styles.image}>
          <Image src="/images/clinic-image.png" alt="clinic" width="50" height="50" />
        </div>
      </div>
    </OverlayView>
  );
};

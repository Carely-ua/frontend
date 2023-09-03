import { FC } from 'react';
import { OverlayView } from '@react-google-maps/api';
import Image from 'next/image';
import { SVG } from '@/components/svg';
import styles from './Marker.module.scss';

export interface MarkerProps {
  rating?: number | null;
  mainImage?: string | null;
  mapCoordinates: {
    lat: number;
    lng: number;
  };
}

export const Marker: FC<MarkerProps> = ({ rating = 0, mapCoordinates, mainImage }) => {
  return (
    <OverlayView mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET} position={mapCoordinates}>
      <div className={styles.marker}>
        <div className={styles.rating}>
          <SVG.Star className={styles.icon} width="10" height="10" />
          {rating}
        </div>
        <div className={styles.image}>
          {!!mainImage && <Image src={mainImage} alt="clinic" width="50" height="50" />}
        </div>
      </div>
    </OverlayView>
  );
};

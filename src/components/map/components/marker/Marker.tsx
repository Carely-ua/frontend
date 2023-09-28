import { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Root, createRoot } from 'react-dom/client';
import classNames from 'classnames';
import { SVG } from '@/components/svg';
import styles from './Marker.module.scss';

interface MarkerContentProps {
  rating?: number | null;
  mainImage?: string | null;
  isClickable: boolean;
}

const MarkerContent: FC<MarkerContentProps> = ({ rating = 0, mainImage, isClickable }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={classNames(styles.marker, { [styles.markerHover]: hover })}
      onMouseEnter={() => isClickable && setHover(true)}
      onMouseLeave={() => isClickable && setHover(false)}>
      <div className={styles.rating}>
        <SVG.Star className={styles.icon} width="10" height="10" />
        {rating}
      </div>
      <div className={styles.image}>
        {!!mainImage && <Image src={mainImage} alt="clinic" width="50" height="50" />}
      </div>
    </div>
  );
};

interface MarkerWrapperProps {
  map: google.maps.Map;
  mapCoordinates: {
    lat: number;
    lng: number;
  };
  children: ReactNode;
  id: string;
  onClick?(id: string): void;
}

const MarkerWrapper: FC<MarkerWrapperProps> = ({ map, mapCoordinates, children, id, onClick }) => {
  const rootRef = useRef<Root>();
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement>();

  const clickHandler = useCallback(() => {
    onClick?.(id);
  }, [id, onClick]);

  useEffect(() => {
    if (!rootRef.current) {
      const container = document.createElement('div');
      rootRef.current = createRoot(container);

      markerRef.current = new google.maps.marker.AdvancedMarkerElement({
        position: mapCoordinates,
        content: container,
      });
    }

    return () => {
      if (markerRef.current) {
        markerRef.current.map = null;
      }
    };
  }, [mapCoordinates]);

  useEffect(() => {
    rootRef.current?.render(children);
    if (markerRef.current) {
      markerRef.current.position = mapCoordinates;
      markerRef.current.map = map;
      const listener = markerRef.current.addListener('click', clickHandler);
      return () => listener.remove();
    }
  }, [map, mapCoordinates, children, clickHandler]);

  return null;
};

export type MarkerProps = Omit<MarkerWrapperProps, 'children'> &
  Omit<MarkerContentProps, 'isClickable'>;

export const Marker: FC<MarkerProps> = ({
  map,
  mapCoordinates,
  rating,
  mainImage,
  id,
  onClick,
}) => {
  return (
    <MarkerWrapper map={map} mapCoordinates={mapCoordinates} id={id} onClick={onClick}>
      <MarkerContent rating={rating} mainImage={mainImage} isClickable={!!onClick} />
    </MarkerWrapper>
  );
};

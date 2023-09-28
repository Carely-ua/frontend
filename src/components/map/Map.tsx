'use client';
import { useRef, FC, useState, useEffect, useCallback } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import { useRouter } from 'next/navigation';
import { Marker, MarkerProps } from './components';
import styles from './Map.module.scss';

const VINNYTSIA_POSITION = {
  lat: 49.23439260166493,
  lng: 28.477175435987192,
};

export type MapItemProps = MarkerProps & { id: string };

const mapOptions = {
  mapId: '89ebabfc997f2bb0',
  center: VINNYTSIA_POSITION,
  zoom: 12,
  disableDefaultUI: true,
};

interface MapContentProps {
  data: Array<MapItemProps> | MapItemProps;
  smallMap?: boolean;
  hrefPrefix?: string;
}

const MapContent: FC<MapContentProps> = ({ data, smallMap, hrefPrefix }) => {
  const [map, setMap] = useState<google.maps.Map>();
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const navigateHandler = useCallback(
    (id: string) => {
      if (hrefPrefix) {
        router.push(`/${hrefPrefix}/${id}`);
      }
    },
    [hrefPrefix, router],
  );

  const isArray = Array.isArray(data);
  const clinics = isArray ? data : [data];

  useEffect(() => {
    if (ref.current) {
      //@ts-ignore
      setMap(() => new google.maps.Map(ref.current, mapOptions));
    }
  }, []);

  return (
    <>
      <div ref={ref} className={smallMap ? styles.smallMap : styles.map} />
      {map &&
        clinics.map(clinic => {
          if (!clinic) return null;
          return (
            <Marker
              key={clinic.id}
              id={clinic.id}
              map={map}
              rating={clinic.rating}
              mainImage={clinic.mainImage}
              mapCoordinates={clinic.mapCoordinates}
              onClick={hrefPrefix ? navigateHandler : undefined}
            />
          );
        })}
    </>
  );
};

export type MapProps = MapContentProps;

export const Map: FC<MapContentProps> = ({ data, smallMap, hrefPrefix }) => {
  return (
    <div className={styles.mapWrapper}>
      <Wrapper apiKey={process.env.NEXT_PUBLIC_API_KEY || ''} version="beta" libraries={['marker']}>
        <MapContent data={data} smallMap={smallMap} hrefPrefix={hrefPrefix} />
      </Wrapper>
    </div>
  );
};

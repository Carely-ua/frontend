'use client';
import { useRef, useCallback, FC, CSSProperties } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { theme } from './theme';
import { Marker, MarkerProps } from './components';
import styles from './Map.module.scss';

const defaultContainerStyle = {
  width: '100%',
  height: 'calc(100vh - 40px)',
};

const VINNYTSIA_POSITION = {
  lat: 49.23439260166493,
  lng: 28.477175435987192,
};

const center = VINNYTSIA_POSITION;

const defaultOption = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  fullscreenControl: false,
  styles: theme,
};

export type MapItemProps = MarkerProps & { id: string };

export interface MapProps {
  data: Array<MapItemProps> | MapItemProps;
  containerStyle?: CSSProperties;
}

export const Map: FC<MapProps> = ({ data, containerStyle }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY || '',
  });
  const mapRef = useRef<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = null;
  }, []);

  const isArray = Array.isArray(data);

  return (
    <div className={styles.mapWrapper}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle || defaultContainerStyle}
          center={isArray ? center : data.mapCoordinates}
          zoom={12}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={defaultOption}>
          {isArray ? (
            data.map(clinic => {
              if (!clinic) return null;
              return (
                <Marker
                  key={clinic.id}
                  rating={clinic.rating}
                  mainImage={clinic.mainImage}
                  mapCoordinates={clinic.mapCoordinates}
                />
              );
            })
          ) : (
            <Marker
              rating={data.rating}
              mainImage={data.mainImage}
              mapCoordinates={data.mapCoordinates}
            />
          )}
        </GoogleMap>
      ) : null}
    </div>
  );
};

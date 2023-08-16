'use client';
import { useRef, useCallback, FC, CSSProperties } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { ClinicTypes } from '@/services';
import { theme } from './theme';
import { Marker, MarkerProps } from './components';
import styles from './Map.module.scss';

const API_KEY = 'AIzaSyBLk8kSHT1YRxxb2H-e51HPxLNMM9rkRjM';

const defaultContainerStyle = {
  width: '100%',
  height: 'calc(100vh - 40px)',
};

const center = {
  lat: 0.3,
  lng: 0.4,
};

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
    googleMapsApiKey: API_KEY,
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
          zoom={10}
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
                  image={clinic.image}
                  mapCoordinates={clinic.mapCoordinates}
                />
              );
            })
          ) : (
            <Marker rating={data.rating} image={data.image} mapCoordinates={data.mapCoordinates} />
          )}
        </GoogleMap>
      ) : null}
    </div>
  );
};

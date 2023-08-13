'use client';
import { useRef, useCallback, FC } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { ClinicTypes } from '@/services';
import { theme } from './theme';
import { Marker } from './components';
import styles from './Map.module.scss';

const API_KEY = 'AIzaSyBLk8kSHT1YRxxb2H-e51HPxLNMM9rkRjM';

const containerStyle = {
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

export interface MapProps {
  clinics: ClinicTypes.Clinics;
}

export const Map: FC<MapProps> = ({ clinics }) => {
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

  return (
    <div className={styles.mapWrapper}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={defaultOption}>
          {clinics.map(clinic => {
            if (!clinic) return null;
            return (
              <Marker
                key={clinic.id}
                rating={clinic.rating}
                image={clinic.image}
                mapCoordinates={clinic.mapCoordinates}
              />
            );
          })}
        </GoogleMap>
      ) : null}
    </div>
  );
};

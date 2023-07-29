'use client';
import { useRef, useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { theme } from './theme';
import { Marker } from './components';
import styles from './Map.module.scss';

const API_KEY = 'AIzaSyBLk8kSHT1YRxxb2H-e51HPxLNMM9rkRjM';

const containerStyle = {
  width: '100%',
  height: '640px',
};

const center = {
  lat: 51.509865,
  lng: -0.118092,
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

export const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  });
  const mapRef = useRef(null);

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
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
          <Marker />
        </GoogleMap>
      ) : null}
    </div>
  );
};

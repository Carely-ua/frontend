import { FC } from 'react';
import { ClinicTypes } from '@/services';
import { ClinicCard } from '../clinic-card';
import { Map } from '../map';
import styles from './SearchResult.module.scss';

export interface SearchResultProps {
  clinics: Array<ClinicTypes.Clinic>;
  hrefPrefix: string;
}

export const SearchResult: FC<SearchResultProps> = ({ clinics, hrefPrefix }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        {clinics.map(clinic => {
          return clinic ? <ClinicCard hrefPrefix={hrefPrefix} key={clinic.id} {...clinic} /> : null;
        })}
      </div>
      <div className={styles.item}>
        <Map />
      </div>
    </div>
  );
};

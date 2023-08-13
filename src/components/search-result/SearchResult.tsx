import { FC } from 'react';
import { ClinicTypes } from '@/services';
import { ClinicCard } from '../clinic-card';
import styles from './SearchResult.module.scss';
import { StickyMap } from './StickyMap';

export interface SearchResultProps {
  clinics: Array<ClinicTypes.Clinic>;
  hrefPrefix: string;
}

export const SearchResult: FC<SearchResultProps> = ({ clinics, hrefPrefix }) => {
  return (
    <div id="searchResult" className={styles.wrapper}>
      <div className={styles.item}>
        {clinics.map(clinic => {
          return clinic ? <ClinicCard hrefPrefix={hrefPrefix} key={clinic.id} {...clinic} /> : null;
        })}
      </div>
      <div className={styles.item}>
        <StickyMap clinics={clinics} />
      </div>
    </div>
  );
};

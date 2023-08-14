import { FC } from 'react';
import { ClinicTypes } from '@/services';
import { ClinicType } from '@/utils/graphql/__generated__/types';
import { ClinicCard, GeneralClinicCart } from '../clinic-card';
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
          if (!clinic) return null;

          if (clinic.clinicType === ClinicType.Clinic) {
            return <ClinicCard hrefPrefix={hrefPrefix} key={clinic.id} {...clinic} />;
          }

          return <GeneralClinicCart hrefPrefix={hrefPrefix} key={clinic.id} {...clinic} />;
        })}
      </div>
      <div className={styles.item}>
        <StickyMap clinics={clinics} />
      </div>
    </div>
  );
};

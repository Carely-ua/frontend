import { FC } from 'react';
import classNames from 'classnames';
import { ClinicTypes } from '@/services';
import { ClinicType } from '@/utils/graphql/__generated__/types';
import { Typography } from '@/ui-kit';
import { ClinicCard, GeneralClinicCart } from '../clinic-card';
import { SVG } from '../svg';
import styles from './SearchResult.module.scss';
import { StickyMap } from './StickyMap';

const MapButton = () => {
  return (
    <div className={styles.mapButton}>
      <Typography component="p" color="white">
        Показати на мапі
      </Typography>
      <div className={styles.mapButtonIcon}>
        <SVG.Map width={16} height={16} />
      </div>
    </div>
  );
};

export interface SearchResultProps {
  clinics: Array<ClinicTypes.Clinic | ClinicTypes.ClinicWithServices>;
  hrefPrefix: string;
  onlyGeneralCard?: boolean;
}

export const SearchResult: FC<SearchResultProps> = ({ clinics, hrefPrefix, onlyGeneralCard }) => {
  return (
    <div id="searchResult" className={styles.wrapper}>
      <div className={styles.item}>
        {clinics.map(clinic => {
          if (!clinic) return null;

          if (clinic.clinicType === ClinicType.Clinic && !onlyGeneralCard) {
            return <ClinicCard hrefPrefix={hrefPrefix} key={clinic.id} {...clinic} />;
          }

          return <GeneralClinicCart hrefPrefix={hrefPrefix} key={clinic.id} {...clinic} />;
        })}
      </div>
      <div className={classNames(styles.item, styles.map)}>
        {/* @ts-ignore */}
        <StickyMap data={clinics} />
      </div>
      <MapButton />
    </div>
  );
};

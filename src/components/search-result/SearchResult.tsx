import { FC } from 'react';
import { ClinicTypes } from '@/services';
import { ClinicCard } from '../clinic-card';
import { Map } from '../map';
import styles from './SearchResult.module.scss';

interface SearchResultProps {
  items: Array<ClinicTypes.Clinic>;
}

export const SearchResult: FC<SearchResultProps> = ({ items }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        {items.map(item => {
          return item ? <ClinicCard key={item.id} {...item} /> : null;
        })}
      </div>
      <div className={styles.item}>
        <Map />
      </div>
    </div>
  );
};

'use client';

import { useMainSearch } from '@/services/search';
import { SearchInput } from '../search-input';
import { SearchNavigation } from './SearchNavigation';
import styles from './SearchBlock.module.scss';

export const SearchBlock = () => {
  const { searchHandler, searchItems } = useMainSearch();

  return (
    <div className={styles.searchBlock}>
      <SearchNavigation />
      <div className={styles.searchInput}>
        <SearchInput
          rightIcon="Search"
          placeholder="Наприклад аналіз на COVID"
          searchHandler={searchHandler}
          items={searchItems}
        />
      </div>
    </div>
  );
};

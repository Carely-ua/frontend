'use client';

import { FC } from 'react';
import classNames from 'classnames';
import { useMainSearch } from '@/services/search';
import { SearchInput } from '../search-input';
import { SearchNavigation } from './SearchNavigation';
import styles from './SearchBlock.module.scss';

interface SearchBlockProps {
  isFooter?: boolean;
}

export const SearchBlock: FC<SearchBlockProps> = ({ isFooter }) => {
  const { searchHandler, searchItems, loading } = useMainSearch();

  return (
    <div className={styles.searchBlock}>
      <SearchNavigation />
      <div className={classNames({ [styles.searchInput]: isFooter })}>
        <SearchInput
          loading={loading}
          rightIcon="Search"
          placeholder="Наприклад, аналіз на COVID"
          searchHandler={searchHandler}
          items={searchItems}
        />
      </div>
    </div>
  );
};

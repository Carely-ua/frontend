'use client';

import { useMainSearch } from '@/services/search';
import { SearchInput } from '../search-input';
import { SearchNavigation } from './SearchNavigation';

export const SearchBlock = () => {
  const { searchHandler, searchItems } = useMainSearch();

  return (
    <div>
      <SearchNavigation />
      <SearchInput
        rightIcon="Search"
        placeholder="Наприклад аналіз на COVID"
        searchHandler={searchHandler}
        items={searchItems}
      />
    </div>
  );
};

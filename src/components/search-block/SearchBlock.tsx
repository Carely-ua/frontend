import { SearchInput } from '../search-input';
import { SearchNavigation } from './SearchNavigation';

export const SearchBlock = () => {
  return (
    <div>
      <SearchNavigation />
      <SearchInput rightIcon="Search" placeholder="Наприклад аналіз на COVID" />
    </div>
  );
};

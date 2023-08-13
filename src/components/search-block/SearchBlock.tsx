import { SearchInput } from '../search-input';
import { SearchNavigation } from './SearchNavigation';

export const SearchBlock = () => {
  return (
    <div>
      <SearchNavigation />
      <SearchInput />
    </div>
  );
};

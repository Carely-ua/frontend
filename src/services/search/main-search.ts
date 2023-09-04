import { useLazyQuery } from '@apollo/client';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import { ClinicType } from '@/utils/graphql/__generated__/types';
import { MainSearchDocument, MainSearchQuery } from './graphql/__generated__/MainSearch';

export type SearchItems = Array<{ title: string; id: string; type: string }>;

const generateSearchItems = (data: MainSearchQuery['mainSearch']) => {
  const items: SearchItems = [];

  if (!data) return items;

  if (data.clinics) {
    data.clinics.forEach(item => {
      if (!item) return;

      const { id, name, clinicType } = item;

      items.push({
        id,
        title: name,
        type: clinicType === ClinicType.Laboratory ? 'labs' : 'clinics',
      });
    });
  }

  if (data.categories) {
    data.categories.forEach(item => {
      if (!item) return;

      const { id, title } = item;

      items.push({ id, title, type: 'services' });
    });
  }

  return items;
};

export const useMainSearch = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 500);

  const [search, { data, previousData }] = useLazyQuery(MainSearchDocument, {
    variables: {
      filters: {},
    },
  });

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const searchItems = useMemo(() => {
    return generateSearchItems(data?.mainSearch || previousData?.mainSearch);
  }, [data?.mainSearch, previousData?.mainSearch]);

  useEffect(() => {
    search({ variables: { filters: { name: debouncedValue } } });
  }, [debouncedValue, search]);

  return { searchItems, searchHandler };
};

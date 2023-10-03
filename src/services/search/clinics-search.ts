import { useLazyQuery } from '@apollo/client';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import { ClinicType } from '@/utils/graphql/__generated__/types';
import { SearchClinicsDocument, SearchClinicsQuery } from './graphql/__generated__/SearchClinics';

const generateSearchItems = (data: SearchClinicsQuery['searchClinics'] | undefined) => {
  if (!data || !data.clinics) return [];

  return data.clinics.map(item => {
    if (!item) return;

    const { id, name, clinicType } = item;

    return {
      id,
      title: name,
      type: clinicType === ClinicType.Laboratory ? 'labs' : 'clinics',
    };
  });
};

export const useClinicsSearch = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 500);

  const [search, { data, previousData }] = useLazyQuery(SearchClinicsDocument, {
    variables: {
      filters: {},
    },
  });

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const searchItems = useMemo(() => {
    return generateSearchItems(data?.searchClinics || previousData?.searchClinics);
  }, [data?.searchClinics, previousData?.searchClinics]);

  useEffect(() => {
    search({ variables: { filters: { name: debouncedValue } } });
  }, [debouncedValue, search]);

  return { searchItems, searchHandler };
};

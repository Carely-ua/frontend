'use client';

import { FC, useState } from 'react';
import Image from 'next/image';
import InputMUI from '@mui/base/Input';
import { Typography } from '@/ui-kit';
import styles from './SearchInput.module.scss';

const items = [
  { title: 'Клініка Covid-19' },
  { title: 'Клініка Акушерства' },
  { title: 'Клініка Алергологія' },
  { title: 'Клініка Алергологія' },
  { title: 'Клініка Анестезіологія' },
  { title: 'Клініка Венерологія' },
  { title: 'Клініка Вертебрологія' },
  { title: 'Клініка Гастроентерологія' },
  { title: 'Клініка Гаматологі' },
  { title: 'Клініка Генетика' },
];

interface SuggestionList {
  items: Array<{ title: string }>;
}

const SuggestionList: FC<SuggestionList> = ({ items }) => {
  return (
    <div className={styles.suggestionList}>
      {items.map(({ title }) => (
        <div className={styles.suggestionListItem} key={title}>
          <Typography component="p" color="dark-grey">
            {title}
          </Typography>
          <Image src="/icons/right-arrow.svg" alt="icon" width={10} height={18} />
        </div>
      ))}
    </div>
  );
};

interface SearchInputProps {
  leftIcon?: string;
  rightIcon?: string;
  placeholder?: string;
}

export const SearchInput: FC<SearchInputProps> = ({ placeholder, leftIcon, rightIcon }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={styles.searchInputWrap}>
      <div className={styles.searchInput}>
        {!!leftIcon && (
          <div className={styles.leftIcon}>
            <Image src={`/icons/${leftIcon}.svg`} alt="icon" width={24} height={24} />
          </div>
        )}
        <InputMUI
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={styles.input}
          placeholder={placeholder}
        />
        {!!rightIcon && (
          <div className={styles.rightIcon}>
            <Image src={`/icons/${rightIcon}.svg`} alt="icon" width={24} height={24} />
          </div>
        )}
      </div>
      {!!isFocused && <SuggestionList items={items} />}
    </div>
  );
};

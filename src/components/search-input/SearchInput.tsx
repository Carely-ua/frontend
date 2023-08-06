'use client';

import { FC, useState } from 'react';
import InputMUI from '@mui/base/Input';
import { Typography } from '@/ui-kit';
import { SVG, SVGNameType } from '../svg';
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
          <SVG.Arrow />
        </div>
      ))}
    </div>
  );
};

interface SearchInputProps {
  leftIcon?: SVGNameType;
  rightIcon?: SVGNameType;
  placeholder?: string;
}

export const SearchInput: FC<SearchInputProps> = ({ placeholder, leftIcon, rightIcon }) => {
  const [isFocused, setIsFocused] = useState(false);

  const LeftIcon = leftIcon ? SVG[leftIcon] : null;
  const RightIcon = rightIcon ? SVG[rightIcon] : null;

  return (
    <div className={styles.searchInputWrap}>
      <div className={styles.searchInput}>
        {!!LeftIcon && (
          <div className={styles.leftIcon}>
            <LeftIcon width={24} height={24} />
          </div>
        )}
        <InputMUI
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={styles.input}
          placeholder={placeholder}
        />
        {!!RightIcon && (
          <div className={styles.rightIcon}>
            <RightIcon width={24} height={24} />
          </div>
        )}
      </div>
      {!!isFocused && <SuggestionList items={items} />}
    </div>
  );
};

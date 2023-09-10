'use client';

import { ChangeEvent, FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import InputMUI from '@mui/base/Input';
import { Typography } from '@/ui-kit';
import { SearchItems } from '@/services/search';
import { SVG, SVGNameType } from '../svg';
import styles from './SearchInput.module.scss';

interface SuggestionList {
  items?: SearchItems;
}

const SuggestionList: FC<SuggestionList> = ({ items = [] }) => {
  const router = useRouter();

  const clickHandler = (path: string) => {
    router.push(path);
  };

  return (
    <div className={styles.suggestionList}>
      {items.map(({ title, id, type }) => (
        <div
          onMouseDown={() => clickHandler(`/${type}/${id}`)}
          className={styles.suggestionListItem}
          key={id}>
          <Typography component="p" color="dark-grey">
            {title}
          </Typography>
          <SVG.Arrow />
        </div>
      ))}
    </div>
  );
};

export interface SearchInputProps extends SuggestionList {
  leftIcon?: SVGNameType;
  rightIcon?: SVGNameType;
  placeholder?: string;
  searchHandler?(event: ChangeEvent<HTMLInputElement>): void;
}

export const SearchInput: FC<SearchInputProps> = ({
  placeholder,
  leftIcon,
  rightIcon,
  searchHandler,
  items,
}) => {
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
          onChange={searchHandler}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={styles.input}
          placeholder={placeholder}
        />
        {!!RightIcon && (
          <div className={styles.rightIcon}>
            <RightIcon />
          </div>
        )}
      </div>
      {!!isFocused && <SuggestionList items={items} />}
    </div>
  );
};

'use client';

import { ChangeEvent, FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import InputMUI from '@mui/base/Input';
import classNames from 'classnames';
import { Typography } from '@/ui-kit';
import { SearchItems } from '@/services/search';
import { SVG, SVGNameType } from '../svg';
import styles from './SearchInput.module.scss';

interface SuggestionList {
  items?: SearchItems;
  loading?: boolean;
}

const SuggestionList: FC<SuggestionList> = ({ items = [], loading }) => {
  const router = useRouter();

  const clickHandler = (path: string) => {
    router.push(path);
  };

  if (loading && items.length === 0) return null;

  return (
    <div className={styles.suggestionList}>
      {items.length > 0 ? (
        items.map(item => {
          if (!item) return null;

          const { title, id, type } = item;

          return (
            <div
              onMouseDown={() => clickHandler(`/${type}/${id}`)}
              className={classNames(styles.suggestionListItem, styles.suggestionListItemWithHover)}
              key={id}>
              <Typography component="p" color="dark-grey">
                {title}
              </Typography>
              <SVG.Arrow />
            </div>
          );
        })
      ) : (
        <div className={styles.suggestionListItem}>
          <Typography component="p" color="dark-grey">
            За запитом нічого не знайдемо
          </Typography>
          <SVG.Arrow />
        </div>
      )}
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
  loading,
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
      {!!isFocused && <SuggestionList items={items} loading={loading} />}
    </div>
  );
};

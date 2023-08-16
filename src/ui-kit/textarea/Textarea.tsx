import { FC } from 'react';
import TextareaAutosize, { TextareaAutosizeProps } from '@mui/base/TextareaAutosize';
import classNames from 'classnames';
import styles from './Textarea.module.scss';

export const Textarea: FC<TextareaAutosizeProps> = ({ className, ...props }) => {
  return <TextareaAutosize className={classNames(styles.textarea, className)} {...props} />;
};

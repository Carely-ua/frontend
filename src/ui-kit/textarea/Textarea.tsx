import { FC, forwardRef } from 'react';
import TextareaAutosize, { TextareaAutosizeProps } from '@mui/base/TextareaAutosize';
import classNames from 'classnames';
import styles from './Textarea.module.scss';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaAutosizeProps>(function CustomInput(
  { className, ...props },
  ref,
) {
  return (
    <TextareaAutosize ref={ref} className={classNames(styles.textarea, className)} {...props} />
  );
});

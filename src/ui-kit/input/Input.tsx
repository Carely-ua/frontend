import { forwardRef } from 'react';
import InputMUI, { InputProps as InputMUIProps } from '@mui/base/Input';
import classNames from 'classnames';
import { Typography } from '../typography';
import styles from './Input.module.scss';

interface InputCustomProps {
  label?: string;
  error?: string;
}

export type InputProps = InputMUIProps & InputCustomProps;

export const Input = forwardRef<HTMLDivElement, InputProps>(function CustomInput(
  { label, error, className, ...props },
  ref,
) {
  return (
    <div className={styles.inputWrap}>
      {!!label && (
        <Typography className={styles.label} component="p" color="dark-grey">
          {label}
        </Typography>
      )}
      <InputMUI className={classNames(styles.input, className)} {...props} ref={ref} />
      {!!error && <Typography component="p">{error}</Typography>}
    </div>
  );
});

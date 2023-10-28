import { forwardRef } from 'react';
import InputMUI, { InputProps as InputMUIProps } from '@mui/base/Input';
import classNames from 'classnames';
import { Typography } from '../typography';
import styles from './Input.module.scss';

interface InputCustomProps {
  label?: string;
  error?: string;
  buttonText?: string;
  onButtonPress?(): void;
}

export type InputProps = InputMUIProps & InputCustomProps;

export const Input = forwardRef<HTMLDivElement, InputProps>(function CustomInput(
  { label, error, className, onButtonPress, buttonText, ...props },
  ref,
) {
  return (
    <div className={styles.inputWrap}>
      {!!label && (
        <Typography className={styles.label} component="p" color="dark-grey">
          {label}
        </Typography>
      )}
      <div className={styles.inputContainer}>
        <InputMUI className={classNames(styles.input, className)} {...props} ref={ref} />
        {!!onButtonPress && (
          <button className={styles.button} onClick={onButtonPress}>
            <Typography component="p" color="white">
              {buttonText}
            </Typography>
          </button>
        )}
      </div>
      {!!error && <Typography component="p">{error}</Typography>}
    </div>
  );
});

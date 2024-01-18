import { FC, forwardRef } from 'react';
import InputMUI, { InputProps as InputMUIProps } from '@mui/base/Input';
import classNames from 'classnames';
import { SVG } from '@/components/svg';
import { Typography } from '../typography';
import styles from './Input.module.scss';

interface InputCustomProps {
  label?: string;
  inputError?: string;
  buttonText?: string;
  onButtonPress?(): void;
  buttonDisabled?: boolean;
}

interface ErrorMessageProps {
  text: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ text }) => (
  <div className={styles.alertWrapper}>
    <SVG.Alert className={styles.alertIcon} width={18} height={18} />
    <Typography component="p" color="dangerous">
      {text}
    </Typography>
  </div>
);

export type InputProps = InputMUIProps & InputCustomProps;

export const Input = forwardRef<HTMLDivElement, InputProps>(function CustomInput(
  { label, inputError, className, onButtonPress, buttonText, buttonDisabled, ...props },
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
          <button disabled={buttonDisabled} className={styles.button} onClick={onButtonPress}>
            <Typography component="p" color="white">
              {buttonText}
            </Typography>
          </button>
        )}
      </div>
      {!!inputError && <ErrorMessage text={inputError} />}
    </div>
  );
});

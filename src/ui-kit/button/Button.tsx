import { FC } from 'react';
import classNames from 'classnames';
import ButtonMUI, { ButtonProps as ButtonMUIProps } from '@mui/base/Button';
import { Typography } from '../typography';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonMUIProps {
  buttonType?: 'primary' | 'secondary' | 'white';
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({
  children,
  buttonType = 'primary',
  className,
  ...props
}) => {
  return (
    <ButtonMUI {...props} className={classNames(styles.button, styles[buttonType], className)}>
      <Typography component="p">{children}</Typography>
    </ButtonMUI>
  );
};

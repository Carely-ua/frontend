import ButtonMUI from '@mui/base/Button';
import { memo } from 'react';

const ButtonComponent = ({ children }: { children: React.ReactNode }) => {
  return <ButtonMUI>{children}</ButtonMUI>;
};

export const Button = memo(ButtonComponent);

import ButtonMUI from '@mui/base/Button';
import { memo } from 'react';

const ButtonComponent = () => {
  return <ButtonMUI>Click Me</ButtonMUI>;
};

export const Button = memo(ButtonComponent);

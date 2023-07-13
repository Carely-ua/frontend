import useButton from '@mui/base/useButton';
import { memo } from 'react';

const ButtonComponent = () => {
  const { getRootProps } = useButton();

  return <button type="button" {...getRootProps()}>Click Me</button>;
}

export const Button = memo(ButtonComponent);
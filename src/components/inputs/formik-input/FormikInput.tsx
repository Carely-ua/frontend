import { FC } from 'react';
import { useField } from 'formik';
import { Input, InputProps } from '@/ui-kit';

export const FormikInput: FC<InputProps & { name: string }> = ({ name = '', ...props }) => {
  const [field, meta, helpers] = useField(name);

  //@ts-ignore
  return <Input {...field} {...props} error={meta.touched && meta.error} />;
};
